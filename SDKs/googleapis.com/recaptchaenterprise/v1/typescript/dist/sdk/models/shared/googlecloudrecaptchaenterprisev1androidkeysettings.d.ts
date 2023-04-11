import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Settings specific to keys that can be used by Android apps.
 */
export declare class GoogleCloudRecaptchaenterpriseV1AndroidKeySettings extends SpeakeasyBase {
    /**
     * If set to true, allowed_package_names are not enforced.
     */
    allowAllPackageNames?: boolean;
    /**
     * Android package names of apps allowed to use the key. Example: 'com.companyname.appname'
     */
    allowedPackageNames?: string[];
    /**
     * Set to true for keys that are used in an Android application that is available for download in app stores in addition to the Google Play Store.
     */
    supportNonGoogleAppStoreDistribution?: boolean;
}
