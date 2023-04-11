import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate. If omitted defaults to `uploaded`.
 */
export declare enum PostCertificatesCreateCertificateRequestTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class PostCertificatesCreateCertificateRequest extends SpeakeasyBase {
    /**
     * Certificate and chain in PEM format, in order so that each record directly certifies the one preceding. Required for type `uploaded` Certificates.
     */
    certificate?: string;
    /**
     * Domains and subdomains that should be contained in the Certificate issued by *Let's Encrypt*. Required for type `managed` Certificates.
     */
    domainNames?: string[];
    /**
     * User-defined labels (key-value pairs)
     */
    labels?: Record<string, any>;
    /**
     * Name of the Certificate
     */
    name: string;
    /**
     * Certificate key in PEM format. Required for type `uploaded` Certificates.
     */
    privateKey?: string;
    /**
     * Choose between uploading a Certificate in PEM format or requesting a managed *Let's Encrypt* Certificate. If omitted defaults to `uploaded`.
     */
    type?: PostCertificatesCreateCertificateRequestTypeEnum;
}
/**
 * Error message for the Action if error occurred, otherwise null
 */
export declare class PostCertificatesCreateCertificateResponseNullableActionError extends SpeakeasyBase {
    /**
     * Fixed machine readable code
     */
    code: string;
    /**
     * Humanized error message
     */
    message: string;
}
export declare class PostCertificatesCreateCertificateResponseNullableActionResources extends SpeakeasyBase {
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
/**
 * Status of the Action
 */
export declare enum PostCertificatesCreateCertificateResponseNullableActionStatusEnum {
    Success = "success",
    Running = "running",
    Error = "error"
}
export declare class PostCertificatesCreateCertificateResponseNullableAction extends SpeakeasyBase {
    /**
     * Command executed in the Action
     */
    command: string;
    /**
     * Error message for the Action if error occurred, otherwise null
     */
    error: PostCertificatesCreateCertificateResponseNullableActionError;
    /**
     * Point in time when the Action was finished (in ISO-8601 format). Only set if the Action is finished otherwise null.
     */
    finished: string;
    /**
     * ID of the Resource
     */
    id: number;
    /**
     * Progress of Action in percent
     */
    progress: number;
    /**
     * Resources the Action relates to
     */
    resources: PostCertificatesCreateCertificateResponseNullableActionResources[];
    /**
     * Point in time when the Action was started (in ISO-8601 format)
     */
    started: string;
    /**
     * Status of the Action
     */
    status: PostCertificatesCreateCertificateResponseNullableActionStatusEnum;
}
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
 */
export declare class PostCertificatesCreateCertificateResponseCertificateStatusError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Status of the issuance process of the Certificate
 */
export declare enum PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}
/**
 * Status of the renewal process of the Certificate.
 */
export declare enum PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
 */
export declare class PostCertificatesCreateCertificateResponseCertificateStatus extends SpeakeasyBase {
    /**
     * If issuance or renewal reports `failed`, this property contains information about what happened
     */
    error?: PostCertificatesCreateCertificateResponseCertificateStatusError;
    /**
     * Status of the issuance process of the Certificate
     */
    issuance?: PostCertificatesCreateCertificateResponseCertificateStatusIssuanceEnum;
    /**
     * Status of the renewal process of the Certificate.
     */
    renewal?: PostCertificatesCreateCertificateResponseCertificateStatusRenewalEnum;
}
/**
 * Type of the Certificate
 */
export declare enum PostCertificatesCreateCertificateResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class PostCertificatesCreateCertificateResponseCertificateUsedBy extends SpeakeasyBase {
    /**
     * ID of resource referenced
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
export declare class PostCertificatesCreateCertificateResponseCertificate extends SpeakeasyBase {
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
    status?: PostCertificatesCreateCertificateResponseCertificateStatus;
    /**
     * Type of the Certificate
     */
    type?: PostCertificatesCreateCertificateResponseCertificateTypeEnum;
    /**
     * Resources currently using the Certificate
     */
    usedBy: PostCertificatesCreateCertificateResponseCertificateUsedBy[];
}
/**
 * The `certificate` key contains the Certificate that was just created. For type `managed` Certificates the `action` key contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.
 */
export declare class PostCertificatesCreateCertificateResponse extends SpeakeasyBase {
    action?: PostCertificatesCreateCertificateResponseNullableAction;
    certificate: PostCertificatesCreateCertificateResponseCertificate;
}
export declare class PostCertificatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The `certificate` key contains the Certificate that was just created. For type `managed` Certificates the `action` key contains the Action that allows for tracking the issuance process. For type `uploaded` Certificates the `action` is always null.
     */
    createCertificateResponse?: PostCertificatesCreateCertificateResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
