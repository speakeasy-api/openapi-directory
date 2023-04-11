import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Status of certificate management. Refers to the most recent certificate acquisition or renewal attempt.@OutputOnly
 */
export declare enum ManagedCertificateStatusEnum {
    ManagementStatusUnspecified = "MANAGEMENT_STATUS_UNSPECIFIED",
    Ok = "OK",
    Pending = "PENDING",
    FailedRetryingNotVisible = "FAILED_RETRYING_NOT_VISIBLE",
    FailedPermanent = "FAILED_PERMANENT",
    FailedRetryingCaaForbidden = "FAILED_RETRYING_CAA_FORBIDDEN",
    FailedRetryingCaaChecking = "FAILED_RETRYING_CAA_CHECKING"
}
/**
 * A certificate managed by App Engine.
 */
export declare class ManagedCertificate extends SpeakeasyBase {
    /**
     * Time at which the certificate was last renewed. The renewal process is fully managed. Certificate renewal will automatically occur before the certificate expires. Renewal errors can be tracked via ManagementStatus.@OutputOnly
     */
    lastRenewalTime?: string;
    /**
     * Status of certificate management. Refers to the most recent certificate acquisition or renewal attempt.@OutputOnly
     */
    status?: ManagedCertificateStatusEnum;
}
