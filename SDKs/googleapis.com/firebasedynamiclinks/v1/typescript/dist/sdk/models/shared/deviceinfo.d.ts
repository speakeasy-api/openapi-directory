import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Signals associated with the device making the request.
 */
export declare class DeviceInfo extends SpeakeasyBase {
    /**
     * Device model name.
     */
    deviceModelName?: string;
    /**
     * Device language code setting.
     */
    languageCode?: string;
    /**
     * Device language code setting obtained by executing JavaScript code in WebView.
     */
    languageCodeFromWebview?: string;
    /**
     * Device language code raw setting. iOS does returns language code in different format than iOS WebView. For example WebView returns en_US, but iOS returns en-US. Field below will return raw value returned by iOS.
     */
    languageCodeRaw?: string;
    /**
     * Device display resolution height.
     */
    screenResolutionHeight?: string;
    /**
     * Device display resolution width.
     */
    screenResolutionWidth?: string;
    /**
     * Device timezone setting.
     */
    timezone?: string;
}
