import { SpeakeasyBase } from "../../../internal/utils";
export declare enum BuyOnGoogleProgramStatusBusinessModelEnum {
    BusinessModelUnspecified = "BUSINESS_MODEL_UNSPECIFIED",
    Manufacturer = "MANUFACTURER",
    Importer = "IMPORTER",
    Reseller = "RESELLER",
    Other = "OTHER"
}
/**
 * The channels through which the merchant is selling.
 */
export declare enum BuyOnGoogleProgramStatusOnlineSalesChannelEnum {
    OnlineSalesChannelUnspecified = "ONLINE_SALES_CHANNEL_UNSPECIFIED",
    GoogleExclusive = "GOOGLE_EXCLUSIVE",
    GoogleAndOtherWebsites = "GOOGLE_AND_OTHER_WEBSITES"
}
/**
 * Response message for the GetProgramStatus method.
 */
export declare class BuyOnGoogleProgramStatusInput extends SpeakeasyBase {
    /**
     * The business models in which merchant participates.
     */
    businessModel?: BuyOnGoogleProgramStatusBusinessModelEnum[];
    /**
     * The customer service pending email. After verification this field becomes empty.
     */
    customerServicePendingEmail?: string;
    /**
     * The pending phone number specified for BuyOnGoogle program. It might be different than account level phone number. In order to update this field the customer_service_pending_phone_region_code must also be set. After verification this field becomes empty.
     */
    customerServicePendingPhoneNumber?: string;
    /**
     * Two letter country code for the pending phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. In order to update this field the customer_service_pending_phone_number must also be set. After verification this field becomes empty.
     */
    customerServicePendingPhoneRegionCode?: string;
    /**
     * The channels through which the merchant is selling.
     */
    onlineSalesChannel?: BuyOnGoogleProgramStatusOnlineSalesChannelEnum;
}
/**
 * Output only. The current participation stage for the program.
 */
export declare enum BuyOnGoogleProgramStatusParticipationStageEnum {
    ProgramParticipationStageUnspecified = "PROGRAM_PARTICIPATION_STAGE_UNSPECIFIED",
    NotEligible = "NOT_ELIGIBLE",
    Eligible = "ELIGIBLE",
    Onboarding = "ONBOARDING",
    EligibleForReview = "ELIGIBLE_FOR_REVIEW",
    PendingReview = "PENDING_REVIEW",
    ReviewDisapproved = "REVIEW_DISAPPROVED",
    Active = "ACTIVE",
    Paused = "PAUSED"
}
/**
 * Response message for the GetProgramStatus method.
 */
export declare class BuyOnGoogleProgramStatus extends SpeakeasyBase {
    /**
     * The business models in which merchant participates.
     */
    businessModel?: BuyOnGoogleProgramStatusBusinessModelEnum[];
    /**
     * The customer service pending email. After verification this field becomes empty.
     */
    customerServicePendingEmail?: string;
    /**
     * The pending phone number specified for BuyOnGoogle program. It might be different than account level phone number. In order to update this field the customer_service_pending_phone_region_code must also be set. After verification this field becomes empty.
     */
    customerServicePendingPhoneNumber?: string;
    /**
     * Two letter country code for the pending phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes. In order to update this field the customer_service_pending_phone_number must also be set. After verification this field becomes empty.
     */
    customerServicePendingPhoneRegionCode?: string;
    /**
     * Output only. The customer service verified email.
     */
    customerServiceVerifiedEmail?: string;
    /**
     * Output only. The verified phone number specified for BuyOnGoogle program. It might be different than account level phone number.
     */
    customerServiceVerifiedPhoneNumber?: string;
    /**
     * Output only. Two letter country code for the verified phone number, for example `CA` for Canadian numbers. See the [ISO 3166-1 alpha-2](https://wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) officially assigned codes.
     */
    customerServiceVerifiedPhoneRegionCode?: string;
    /**
     * The channels through which the merchant is selling.
     */
    onlineSalesChannel?: BuyOnGoogleProgramStatusOnlineSalesChannelEnum;
    /**
     * Output only. The current participation stage for the program.
     */
    participationStage?: BuyOnGoogleProgramStatusParticipationStageEnum;
}
