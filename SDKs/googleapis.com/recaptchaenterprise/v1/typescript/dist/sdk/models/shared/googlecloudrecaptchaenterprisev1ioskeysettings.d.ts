import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings specific to keys that can be used by iOS apps.
 */
export declare class GoogleCloudRecaptchaenterpriseV1IOSKeySettings extends SpeakeasyBase {
    /**
     * If set to true, allowed_bundle_ids are not enforced.
     */
    allowAllBundleIds?: boolean;
    /**
     * iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'
     */
    allowedBundleIds?: string[];
}
