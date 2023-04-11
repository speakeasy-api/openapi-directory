import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRecaptchaenterpriseV1AndroidKeySettings } from "./googlecloudrecaptchaenterprisev1androidkeysettings";
import { GoogleCloudRecaptchaenterpriseV1IOSKeySettings } from "./googlecloudrecaptchaenterprisev1ioskeysettings";
import { GoogleCloudRecaptchaenterpriseV1TestingOptions } from "./googlecloudrecaptchaenterprisev1testingoptions";
import { GoogleCloudRecaptchaenterpriseV1WafSettings } from "./googlecloudrecaptchaenterprisev1wafsettings";
import { GoogleCloudRecaptchaenterpriseV1WebKeySettings } from "./googlecloudrecaptchaenterprisev1webkeysettings";
/**
 * A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.
 */
export declare class GoogleCloudRecaptchaenterpriseV1KeyInput extends SpeakeasyBase {
    /**
     * Settings specific to keys that can be used by Android apps.
     */
    androidSettings?: GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;
    /**
     * Human-readable display name of this key. Modifiable by user.
     */
    displayName?: string;
    /**
     * Settings specific to keys that can be used by iOS apps.
     */
    iosSettings?: GoogleCloudRecaptchaenterpriseV1IOSKeySettings;
    /**
     * See Creating and managing labels.
     */
    labels?: Record<string, string>;
    /**
     * The resource name for the Key in the format "projects/{project}/keys/{key}".
     */
    name?: string;
    /**
     * Options for user acceptance testing.
     */
    testingOptions?: GoogleCloudRecaptchaenterpriseV1TestingOptions;
    /**
     * Settings specific to keys that can be used for WAF (Web Application Firewall).
     */
    wafSettings?: GoogleCloudRecaptchaenterpriseV1WafSettings;
    /**
     * Settings specific to keys that can be used by websites.
     */
    webSettings?: GoogleCloudRecaptchaenterpriseV1WebKeySettings;
}
/**
 * A key used to identify and configure applications (web and/or mobile) that use reCAPTCHA Enterprise.
 */
export declare class GoogleCloudRecaptchaenterpriseV1Key extends SpeakeasyBase {
    /**
     * Settings specific to keys that can be used by Android apps.
     */
    androidSettings?: GoogleCloudRecaptchaenterpriseV1AndroidKeySettings;
    /**
     * Output only. The timestamp corresponding to the creation of this key.
     */
    createTime?: string;
    /**
     * Human-readable display name of this key. Modifiable by user.
     */
    displayName?: string;
    /**
     * Settings specific to keys that can be used by iOS apps.
     */
    iosSettings?: GoogleCloudRecaptchaenterpriseV1IOSKeySettings;
    /**
     * See Creating and managing labels.
     */
    labels?: Record<string, string>;
    /**
     * The resource name for the Key in the format "projects/{project}/keys/{key}".
     */
    name?: string;
    /**
     * Options for user acceptance testing.
     */
    testingOptions?: GoogleCloudRecaptchaenterpriseV1TestingOptions;
    /**
     * Settings specific to keys that can be used for WAF (Web Application Firewall).
     */
    wafSettings?: GoogleCloudRecaptchaenterpriseV1WafSettings;
    /**
     * Settings specific to keys that can be used by websites.
     */
    webSettings?: GoogleCloudRecaptchaenterpriseV1WebKeySettings;
}
