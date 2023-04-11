import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specified the reason for ineligibility.
 */
export declare enum GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum {
    ReasonUnspecified = "REASON_UNSPECIFIED",
    PendingTosAcceptance = "PENDING_TOS_ACCEPTANCE",
    SkuNotEligible = "SKU_NOT_ELIGIBLE",
    SkuSuspended = "SKU_SUSPENDED"
}
/**
 * Specifies transfer eligibility of a SKU.
 */
export declare class GoogleCloudChannelV1TransferEligibility extends SpeakeasyBase {
    /**
     * Localized description if reseller is not eligible to transfer the SKU.
     */
    description?: string;
    /**
     * Specified the reason for ineligibility.
     */
    ineligibilityReason?: GoogleCloudChannelV1TransferEligibilityIneligibilityReasonEnum;
    /**
     * Whether reseller is eligible to transfer the SKU.
     */
    isEligible?: boolean;
}
