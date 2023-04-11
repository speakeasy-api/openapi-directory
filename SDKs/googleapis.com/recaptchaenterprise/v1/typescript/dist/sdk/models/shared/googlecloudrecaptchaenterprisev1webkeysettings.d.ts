import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE.
 */
export declare enum GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum {
    ChallengeSecurityPreferenceUnspecified = "CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED",
    Usability = "USABILITY",
    Balance = "BALANCE",
    Security = "SECURITY"
}
/**
 * Required. Describes how this key is integrated with the website.
 */
export declare enum GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum {
    IntegrationTypeUnspecified = "INTEGRATION_TYPE_UNSPECIFIED",
    Score = "SCORE",
    Checkbox = "CHECKBOX",
    Invisible = "INVISIBLE"
}
/**
 * Settings specific to keys that can be used by websites.
 */
export declare class GoogleCloudRecaptchaenterpriseV1WebKeySettings extends SpeakeasyBase {
    /**
     * If set to true, it means allowed_domains will not be enforced.
     */
    allowAllDomains?: boolean;
    /**
     * If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. This is supported only for the SCORE integration type.
     */
    allowAmpTraffic?: boolean;
    /**
     * Domains or subdomains of websites allowed to use the key. All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'
     */
    allowedDomains?: string[];
    /**
     * Settings for the frequency and difficulty at which this key triggers captcha challenges. This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE.
     */
    challengeSecurityPreference?: GoogleCloudRecaptchaenterpriseV1WebKeySettingsChallengeSecurityPreferenceEnum;
    /**
     * Required. Describes how this key is integrated with the website.
     */
    integrationType?: GoogleCloudRecaptchaenterpriseV1WebKeySettingsIntegrationTypeEnum;
}
