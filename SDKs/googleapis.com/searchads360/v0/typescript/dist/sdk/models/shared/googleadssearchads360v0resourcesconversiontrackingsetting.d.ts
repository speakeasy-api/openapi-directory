import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Output only. Conversion tracking status. It indicates whether the customer is using conversion tracking, and who is the conversion tracking owner of this customer. If this customer is using cross-account conversion tracking, the value returned will differ based on the `login-customer-id` of the request.
 */
export declare enum GoogleAdsSearchads360V0ResourcesConversionTrackingSettingConversionTrackingStatusEnum {
    Unspecified = "UNSPECIFIED",
    Unknown = "UNKNOWN",
    NotConversionTracked = "NOT_CONVERSION_TRACKED",
    ConversionTrackingManagedBySelf = "CONVERSION_TRACKING_MANAGED_BY_SELF",
    ConversionTrackingManagedByThisManager = "CONVERSION_TRACKING_MANAGED_BY_THIS_MANAGER",
    ConversionTrackingManagedByAnotherManager = "CONVERSION_TRACKING_MANAGED_BY_ANOTHER_MANAGER"
}
/**
 * A collection of customer-wide settings related to Search Ads 360 Conversion Tracking.
 */
export declare class GoogleAdsSearchads360V0ResourcesConversionTrackingSetting extends SpeakeasyBase {
    /**
     * Output only. Whether the customer has accepted customer data terms. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only. For more information, see https://support.google.com/adspolicy/answer/7475709.
     */
    acceptedCustomerDataTerms?: boolean;
    /**
     * Output only. The conversion tracking id used for this account. This id doesn't indicate whether the customer uses conversion tracking (conversion_tracking_status does). This field is read-only.
     */
    conversionTrackingId?: string;
    /**
     * Output only. Conversion tracking status. It indicates whether the customer is using conversion tracking, and who is the conversion tracking owner of this customer. If this customer is using cross-account conversion tracking, the value returned will differ based on the `login-customer-id` of the request.
     */
    conversionTrackingStatus?: GoogleAdsSearchads360V0ResourcesConversionTrackingSettingConversionTrackingStatusEnum;
    /**
     * Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into cross-account conversion tracking, and it overrides conversion_tracking_id.
     */
    crossAccountConversionTrackingId?: string;
    /**
     * Output only. Whether the customer is opted-in for enhanced conversions for leads. If using cross-account conversion tracking, this value is inherited from the manager. This field is read-only.
     */
    enhancedConversionsForLeadsEnabled?: boolean;
    /**
     * Output only. The resource name of the customer where conversions are created and managed. This field is read-only.
     */
    googleAdsConversionCustomer?: string;
    /**
     * Output only. The conversion tracking id of the customer's manager. This is set when the customer is opted into conversion tracking, and it overrides conversion_tracking_id. This field can only be managed through the Google Ads UI. This field is read-only.
     */
    googleAdsCrossAccountConversionTrackingId?: string;
}
