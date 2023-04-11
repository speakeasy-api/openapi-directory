import { SpeakeasyBase } from "../../../internal/utils";
import { PolicyTopicEntry } from "./policytopicentry";
/**
 * Serving status for the given transaction type (for example, open auction, deals) or region (for example, China, Russia). Can be used to filter the response of the creatives.list method.
 */
export declare enum PolicyComplianceStatusEnum {
    StatusUnspecified = "STATUS_UNSPECIFIED",
    PendingReview = "PENDING_REVIEW",
    Disapproved = "DISAPPROVED",
    Approved = "APPROVED",
    CertificateRequired = "CERTIFICATE_REQUIRED"
}
/**
 * Policy compliance of the creative for a transaction type or a region.
 */
export declare class PolicyCompliance extends SpeakeasyBase {
    /**
     * Serving status for the given transaction type (for example, open auction, deals) or region (for example, China, Russia). Can be used to filter the response of the creatives.list method.
     */
    status?: PolicyComplianceStatusEnum;
    /**
     * Topics related to the policy compliance for this transaction type (for example, open auction, deals) or region (for example, China, Russia). Topics may be present only if status is DISAPPROVED.
     */
    topics?: PolicyTopicEntry[];
}
