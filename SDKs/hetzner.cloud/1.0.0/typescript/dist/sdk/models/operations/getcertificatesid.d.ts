import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetCertificatesIdRequest extends SpeakeasyBase {
    /**
     * ID of the resource
     */
    id: number;
}
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
 */
export declare class GetCertificatesIdCertificateResponseCertificateStatusError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Status of the issuance process of the Certificate
 */
export declare enum GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}
/**
 * Status of the renewal process of the Certificate.
 */
export declare enum GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
 */
export declare class GetCertificatesIdCertificateResponseCertificateStatus extends SpeakeasyBase {
    /**
     * If issuance or renewal reports `failed`, this property contains information about what happened
     */
    error?: GetCertificatesIdCertificateResponseCertificateStatusError;
    /**
     * Status of the issuance process of the Certificate
     */
    issuance?: GetCertificatesIdCertificateResponseCertificateStatusIssuanceEnum;
    /**
     * Status of the renewal process of the Certificate.
     */
    renewal?: GetCertificatesIdCertificateResponseCertificateStatusRenewalEnum;
}
/**
 * Type of the Certificate
 */
export declare enum GetCertificatesIdCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class GetCertificatesIdCertificateResponseCertificateUsedBy extends SpeakeasyBase {
    /**
     * ID of resource referenced
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
export declare class GetCertificatesIdCertificateResponseCertificate extends SpeakeasyBase {
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
    status?: GetCertificatesIdCertificateResponseCertificateStatus;
    /**
     * Type of the Certificate
     */
    type?: GetCertificatesIdCertificateResponseCertificateTypeEnum;
    /**
     * Resources currently using the Certificate
     */
    usedBy: GetCertificatesIdCertificateResponseCertificateUsedBy[];
}
/**
 * The `certificate` key contains a Certificate object
 */
export declare class GetCertificatesIdCertificateResponse extends SpeakeasyBase {
    certificate: GetCertificatesIdCertificateResponseCertificate;
}
export declare class GetCertificatesIdResponse extends SpeakeasyBase {
    /**
     * The `certificate` key contains a Certificate object
     */
    certificateResponse?: GetCertificatesIdCertificateResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
