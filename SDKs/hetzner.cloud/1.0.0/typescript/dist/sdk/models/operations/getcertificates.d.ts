import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Can be used multiple times.
 */
export declare enum GetCertificatesSortEnum {
    Id = "id",
    IdAsc = "id:asc",
    IdDesc = "id:desc",
    Name = "name",
    NameAsc = "name:asc",
    NameDesc = "name:desc",
    Created = "created",
    CreatedAsc = "created:asc",
    CreatedDesc = "created:desc"
}
/**
 * Can be used multiple times. The response will only contain Certificates matching the type.
 */
export declare enum GetCertificatesTypeParameterTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class GetCertificatesRequest extends SpeakeasyBase {
    /**
     * Can be used to filter resources by labels. The response will only contain resources matching the label selector.
     */
    labelSelector?: string;
    /**
     * Can be used to filter resources by their name. The response will only contain the resources matching the specified name
     */
    name?: string;
    /**
     * Can be used multiple times.
     */
    sort?: GetCertificatesSortEnum;
    /**
     * Can be used multiple times. The response will only contain Certificates matching the type.
     */
    type?: GetCertificatesTypeParameterTypeEnum;
}
/**
 * If issuance or renewal reports `failed`, this property contains information about what happened
 */
export declare class GetCertificatesCertificatesResponseCertificateStatusError extends SpeakeasyBase {
    code?: string;
    message?: string;
}
/**
 * Status of the issuance process of the Certificate
 */
export declare enum GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum {
    Pending = "pending",
    Completed = "completed",
    Failed = "failed"
}
/**
 * Status of the renewal process of the Certificate.
 */
export declare enum GetCertificatesCertificatesResponseCertificateStatusRenewalEnum {
    Scheduled = "scheduled",
    Pending = "pending",
    Failed = "failed",
    Unavailable = "unavailable"
}
/**
 * Current status of a type `managed` Certificate, always *null* for type `uploaded` Certificates
 */
export declare class GetCertificatesCertificatesResponseCertificateStatus extends SpeakeasyBase {
    /**
     * If issuance or renewal reports `failed`, this property contains information about what happened
     */
    error?: GetCertificatesCertificatesResponseCertificateStatusError;
    /**
     * Status of the issuance process of the Certificate
     */
    issuance?: GetCertificatesCertificatesResponseCertificateStatusIssuanceEnum;
    /**
     * Status of the renewal process of the Certificate.
     */
    renewal?: GetCertificatesCertificatesResponseCertificateStatusRenewalEnum;
}
/**
 * Type of the Certificate
 */
export declare enum GetCertificatesCertificatesResponseCertificateTypeEnum {
    Uploaded = "uploaded",
    Managed = "managed"
}
export declare class GetCertificatesCertificatesResponseCertificateUsedBy extends SpeakeasyBase {
    /**
     * ID of resource referenced
     */
    id: number;
    /**
     * Type of resource referenced
     */
    type: string;
}
export declare class GetCertificatesCertificatesResponseCertificate extends SpeakeasyBase {
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
    status?: GetCertificatesCertificatesResponseCertificateStatus;
    /**
     * Type of the Certificate
     */
    type?: GetCertificatesCertificatesResponseCertificateTypeEnum;
    /**
     * Resources currently using the Certificate
     */
    usedBy: GetCertificatesCertificatesResponseCertificateUsedBy[];
}
export declare class GetCertificatesCertificatesResponseMetaPagination extends SpeakeasyBase {
    /**
     * ID of the last page available. Can be null if the current page is the last one.
     */
    lastPage: number;
    /**
     * ID of the next page. Can be null if the current page is the last one.
     */
    nextPage: number;
    /**
     * Current page number
     */
    page: number;
    /**
     * Maximum number of items shown per page in the response
     */
    perPage: number;
    /**
     * ID of the previous page. Can be null if the current page is the first one.
     */
    previousPage: number;
    /**
     * The total number of entries that exist in the database for this query. Nullable if unknown.
     */
    totalEntries: number;
}
export declare class GetCertificatesCertificatesResponseMeta extends SpeakeasyBase {
    pagination: GetCertificatesCertificatesResponseMetaPagination;
}
/**
 * The `certificates` key contains an array of Certificate objects
 */
export declare class GetCertificatesCertificatesResponse extends SpeakeasyBase {
    certificates: GetCertificatesCertificatesResponseCertificate[];
    meta?: GetCertificatesCertificatesResponseMeta;
}
export declare class GetCertificatesResponse extends SpeakeasyBase {
    /**
     * The `certificates` key contains an array of Certificate objects
     */
    certificatesResponse?: GetCertificatesCertificatesResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
