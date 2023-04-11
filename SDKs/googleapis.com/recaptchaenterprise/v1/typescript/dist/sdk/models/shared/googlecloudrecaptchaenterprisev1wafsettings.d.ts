import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The WAF feature for which this key is enabled.
 */
export declare enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum {
    WafFeatureUnspecified = "WAF_FEATURE_UNSPECIFIED",
    ChallengePage = "CHALLENGE_PAGE",
    SessionToken = "SESSION_TOKEN",
    ActionToken = "ACTION_TOKEN",
    Express = "EXPRESS"
}
/**
 * Required. The WAF service that uses this key.
 */
export declare enum GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum {
    WafServiceUnspecified = "WAF_SERVICE_UNSPECIFIED",
    Ca = "CA",
    Fastly = "FASTLY"
}
/**
 * Settings specific to keys that can be used for WAF (Web Application Firewall).
 */
export declare class GoogleCloudRecaptchaenterpriseV1WafSettings extends SpeakeasyBase {
    /**
     * Required. The WAF feature for which this key is enabled.
     */
    wafFeature?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafFeatureEnum;
    /**
     * Required. The WAF service that uses this key.
     */
    wafService?: GoogleCloudRecaptchaenterpriseV1WafSettingsWafServiceEnum;
}
