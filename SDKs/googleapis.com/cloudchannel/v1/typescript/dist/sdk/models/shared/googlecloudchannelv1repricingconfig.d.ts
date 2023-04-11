import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1ConditionalOverride } from "./googlecloudchannelv1conditionaloverride";
import { GoogleCloudChannelV1RepricingAdjustment } from "./googlecloudchannelv1repricingadjustment";
import { GoogleCloudChannelV1RepricingConfigEntitlementGranularity } from "./googlecloudchannelv1repricingconfigentitlementgranularity";
import { GoogleTypeDate } from "./googletypedate";
/**
 * Required. The RebillingBasis to use for this bill. Specifies the relative cost based on repricing costs you will apply.
 */
export declare enum GoogleCloudChannelV1RepricingConfigRebillingBasisEnum {
    RebillingBasisUnspecified = "REBILLING_BASIS_UNSPECIFIED",
    CostAtList = "COST_AT_LIST",
    DirectCustomerCost = "DIRECT_CUSTOMER_COST"
}
/**
 * Configuration for repricing a Google bill over a period of time.
 */
export declare class GoogleCloudChannelV1RepricingConfig extends SpeakeasyBase {
    /**
     * A type that represents the various adjustments you can apply to a bill.
     */
    adjustment?: GoogleCloudChannelV1RepricingAdjustment;
    /**
     * Applies the repricing configuration at the channel partner level. The channel partner value is derived from the resource name. Takes an empty json object.
     */
    channelPartnerGranularity?: Record<string, any>;
    /**
     * The conditional overrides to apply for this configuration. If you list multiple overrides, only the first valid override is used. If you don't list any overrides, the API uses the normal adjustment and rebilling basis.
     */
    conditionalOverrides?: GoogleCloudChannelV1ConditionalOverride[];
    /**
     * Represents a whole or partial calendar date, such as a birthday. The time of day and time zone are either specified elsewhere or are insignificant. The date is relative to the Gregorian Calendar. This can represent one of the following: * A full date, with non-zero year, month, and day values. * A month and day, with a zero year (for example, an anniversary). * A year on its own, with a zero month and a zero day. * A year and month, with a zero day (for example, a credit card expiration date). Related types: * google.type.TimeOfDay * google.type.DateTime * google.protobuf.Timestamp
     */
    effectiveInvoiceMonth?: GoogleTypeDate;
    /**
     * Applies the repricing configuration at the entitlement level.
     */
    entitlementGranularity?: GoogleCloudChannelV1RepricingConfigEntitlementGranularity;
    /**
     * Required. The RebillingBasis to use for this bill. Specifies the relative cost based on repricing costs you will apply.
     */
    rebillingBasis?: GoogleCloudChannelV1RepricingConfigRebillingBasisEnum;
}
