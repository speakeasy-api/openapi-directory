import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum {
    CustomerTypeUnspecified = "CUSTOMER_TYPE_UNSPECIFIED",
    Domain = "DOMAIN",
    Team = "TEAM"
}
export declare enum GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum {
    PromotionalTypeUnspecified = "PROMOTIONAL_TYPE_UNSPECIFIED",
    NewUpgrade = "NEW_UPGRADE",
    Transfer = "TRANSFER",
    PromotionSwitch = "PROMOTION_SWITCH"
}
/**
 * Represents constraints required to purchase the Offer for a customer.
 */
export declare class GoogleCloudChannelV1CustomerConstraints extends SpeakeasyBase {
    /**
     * Allowed Customer Type.
     */
    allowedCustomerTypes?: GoogleCloudChannelV1CustomerConstraintsAllowedCustomerTypesEnum[];
    /**
     * Allowed geographical regions of the customer.
     */
    allowedRegions?: string[];
    /**
     * Allowed Promotional Order Type. Present for Promotional offers.
     */
    promotionalOrderTypes?: GoogleCloudChannelV1CustomerConstraintsPromotionalOrderTypesEnum[];
}
