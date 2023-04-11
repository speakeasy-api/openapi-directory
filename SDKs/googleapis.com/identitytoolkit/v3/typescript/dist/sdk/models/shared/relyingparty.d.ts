import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request of getting a code for user confirmation (reset password, change email etc.)
 */
export declare class Relyingparty extends SpeakeasyBase {
    /**
     * whether or not to install the android app on the device where the link is opened
     */
    androidInstallApp?: boolean;
    /**
     * minimum version of the app. if the version on the device is lower than this version then the user is taken to the play store to upgrade the app
     */
    androidMinimumVersion?: string;
    /**
     * android package name of the android app to handle the action code
     */
    androidPackageName?: string;
    /**
     * whether or not the app can handle the oob code without first going to web
     */
    canHandleCodeInApp?: boolean;
    /**
     * The recaptcha response from the user.
     */
    captchaResp?: string;
    /**
     * The recaptcha challenge presented to the user.
     */
    challenge?: string;
    /**
     * The url to continue to the Gitkit app
     */
    continueUrl?: string;
    /**
     * The email of the user.
     */
    email?: string;
    /**
     * iOS app store id to download the app if it's not already installed
     */
    iOSAppStoreId?: string;
    /**
     * the iOS bundle id of iOS app to handle the action code
     */
    iOSBundleId?: string;
    /**
     * The user's Gitkit login token for email change.
     */
    idToken?: string;
    /**
     * The fixed string "identitytoolkit#relyingparty".
     */
    kind?: string;
    /**
     * The new email if the code is for email change.
     */
    newEmail?: string;
    /**
     * The request type.
     */
    requestType?: string;
    /**
     * The IP address of the user.
     */
    userIp?: string;
}
