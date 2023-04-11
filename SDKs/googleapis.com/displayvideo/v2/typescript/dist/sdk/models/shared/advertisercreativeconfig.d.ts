import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Creatives related settings of an advertiser.
 */
export declare class AdvertiserCreativeConfig extends SpeakeasyBase {
    /**
     * Whether or not the advertiser is enabled for dynamic creatives.
     */
    dynamicCreativeEnabled?: boolean;
    /**
     * An ID for configuring campaign monitoring provided by Integral Ad Service (IAS). The DV360 system will append an IAS "Campaign Monitor" tag containing this ID to the creative tag.
     */
    iasClientId?: string;
    /**
     * Whether or not to use DV360's Online Behavioral Advertising (OBA) compliance. Warning: Changing OBA settings may cause the audit status of your creatives to be reset by some ad exchanges, making them ineligible to serve until they are re-approved.
     */
    obaComplianceDisabled?: boolean;
    /**
     * By setting this field to `true`, you, on behalf of your company, authorize Google to use video creatives associated with this Display & Video 360 advertiser to provide reporting and features related to the advertiser's television campaigns. Applicable only when the advertiser has a CM360 hybrid ad server configuration.
     */
    videoCreativeDataSharingAuthorized?: boolean;
}
