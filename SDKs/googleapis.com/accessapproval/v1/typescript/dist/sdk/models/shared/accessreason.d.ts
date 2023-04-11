import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Type of access justification.
 */
export declare enum AccessReasonTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    CustomerInitiatedSupport = "CUSTOMER_INITIATED_SUPPORT",
    GoogleInitiatedService = "GOOGLE_INITIATED_SERVICE",
    GoogleInitiatedReview = "GOOGLE_INITIATED_REVIEW",
    ThirdPartyDataRequest = "THIRD_PARTY_DATA_REQUEST",
    GoogleResponseToProductionAlert = "GOOGLE_RESPONSE_TO_PRODUCTION_ALERT"
}
export declare class AccessReason extends SpeakeasyBase {
    /**
     * More detail about certain reason types. See comments for each type above.
     */
    detail?: string;
    /**
     * Type of access justification.
     */
    type?: AccessReasonTypeEnum;
}
