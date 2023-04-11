import { SpeakeasyBase } from "../../../internal/utils";
export declare class UALookupResponse extends SpeakeasyBase {
    /**
     * If the client is a web browser which underlying browser engine does it use
     */
    browserEngine: string;
    /**
     * If the client is a web browser which year was this browser version released
     */
    browserRelease: string;
    /**
     * The device brand / manufacturer
     */
    deviceBrand: string;
    /**
     * The device display height in CSS 'px'
     */
    deviceHeightPx: number;
    /**
     * The device model
     */
    deviceModel: string;
    /**
     * The device model code
     */
    deviceModelCode: string;
    /**
     * The device display pixel ratio (the ratio of the resolution in physical pixels to the resolution in CSS pixels)
     */
    devicePixelRatio: number;
    /**
     * The device display PPI (pixels per inch)
     */
    devicePpi: number;
    /**
     * The average device price on release in USD
     */
    devicePrice: number;
    /**
     * The year when this device model was released
     */
    deviceRelease: string;
    /**
     * The device display resolution in physical pixels (e.g. 720x1280)
     */
    deviceResolution: string;
    /**
     * The device display width in CSS 'px'
     */
    deviceWidthPx: number;
    /**
     * Is this a mobile device (e.g. a phone or tablet)
     */
    isMobile: boolean;
    /**
     * Is this a WebView / embedded software client
     */
    isWebview: boolean;
    /**
     * The client software name
     */
    name: string;
    /**
     * The full operating system name
     */
    os: string;
    /**
     * The operating system family. The major OS families are: Android, Windows, macOS, iOS, Linux
     */
    osFamily: string;
    /**
     * The operating system full version
     */
    osVersion: string;
    /**
     * The operating system major version
     */
    osVersionMajor: string;
    /**
     * The user agent type, possible values are: <br> <ul> <li>desktop</li> <li>phone</li> <li>tablet</li> <li>wearable</li> <li>tv</li> <li>console</li> <li>email</li> <li>library</li> <li>robot</li> <li>unknown</li> </ul>
     */
    type: string;
    /**
     * The user agent string
     */
    ua: string;
    /**
     * The client software full version
     */
    version: string;
    /**
     * The client software major version
     */
    versionMajor: string;
}
