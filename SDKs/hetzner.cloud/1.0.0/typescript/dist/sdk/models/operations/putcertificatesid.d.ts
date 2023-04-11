import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutCertificatesIdUpdateCertificateRequest extends SpeakeasyBase {
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * New Certificate name
     */
    name?: string;
}
export declare class PutCertificatesIdRequest extends SpeakeasyBase {
    requestBody?: PutCertificatesIdUpdateCertificateRequest;
    /**
     * ID of the resource
     */
    id: number;
}
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
 */
export declare class PutCertificatesIdCertificateResponseCertificateStatusError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Status of the issuance process of the Certificate
 */
export declare enum PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}
/**
 * Status of the renewal process of the Certificate.
 */
export declare enum PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
 */
export declare class PutCertificatesIdCertificateResponseCertificateStatus extends SpeakeasyBase {
    /**
     * If issuance or renewal reports `failed`, this property contains information about what happened
     */
    error?: PutCertificatesIdCertificateResponseCertificateStatusError;
    /**
     * Status of the issuance process of the Certificate
     */
    issuance?: PutCertificatesIdCertificateResponseCertificateStatusIssuanceEnum;
    /**
     * Status of the renewal process of the Certificate.
     */
    renewal?: PutCertificatesIdCertificateResponseCertificateStatusRenewalEnum;
}
/**
 * Type of the Certificate
 */
export declare enum PutCertificatesIdCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class PutCertificatesIdCertificateResponseCertificateUsedBy extends SpeakeasyBase {
    /**
     * ID of resource referenced
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
export declare class PutCertificatesIdCertificateResponseCertificate extends SpeakeasyBase {
    /**
     * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding
     */
    certificate: string;
    /**
     * Point in time when the Resource was created (in ISO-8601 format)
     */
    created: string;
    /**
     * Domains and subdomains covered by the Certificate
     */
    domainNames: string[];
    /**
     * SHA256 fingerprint of the Certificate
     */
    fingerprint: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * User-defined labels (key-value pairs)
     */
    labels: Record<string, string>;
    /**
     * Name of the Resource. Must be unique per Project.
     */
    name: string;
    /**
     * Point in time when the Certificate stops being valid (in ISO-8601 format)
     */
    notValidAfter: string;
    /**
     * Point in time when the Certificate becomes valid (in ISO-8601 format)
     */
    notValidBefore: string;
    /**
     * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
     */
    status?: PutCertificatesIdCertificateResponseCertificateStatus;
    /**
     * Type of the Certificate
     */
    type?: PutCertificatesIdCertificateResponseCertificateTypeEnum;
    /**
     * Resources currently using the Certificate
     */
    usedBy: PutCertificatesIdCertificateResponseCertificateUsedBy[];
}
/**
 * The `certificate` key contains the Certificate that was just updated
 */
export declare class PutCertificatesIdCertificateResponse extends SpeakeasyBase {
    certificate: PutCertificatesIdCertificateResponseCertificate;
}
export declare class PutCertificatesIdResponse extends SpeakeasyBase {
    /**
     * The `certificate` key contains the Certificate that was just updated
     */
    certificateResponse?: PutCertificatesIdCertificateResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
