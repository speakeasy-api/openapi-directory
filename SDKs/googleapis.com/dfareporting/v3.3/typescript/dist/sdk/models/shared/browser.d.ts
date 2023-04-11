import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Contains information about a browser that can be targeted by ads.
 */
export declare class Browser extends SpeakeasyBase {
    /**
     * ID referring to this grouping of browser and version numbers. This is the ID used for targeting.
     */
    browserVersionId?: string;
    /**
     * DART ID of this browser. This is the ID used when generating reports.
     */
    dartId?: string;
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#browser".
     */
    kind?: string;
    /**
     * Major version number (leftmost number) of this browser. For example, for Chrome 5.0.376.86 beta, this field should be set to 5. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.
     */
    majorVersion?: string;
    /**
     * Minor version number (number after first dot on left) of this browser. For example, for Chrome 5.0.375.86 beta, this field should be set to 0. An asterisk (*) may be used to target any version number, and a question mark (?) may be used to target cases where the version number cannot be identified. For example, Chrome *.* targets any version of Chrome: 1.2, 2.5, 3.5, and so on. Chrome 3.* targets Chrome 3.1, 3.5, but not 4.0. Firefox ?.? targets cases where the ad server knows the browser is Firefox but can't tell which version it is.
     */
    minorVersion?: string;
    /**
     * Name of this browser.
     */
    name?: string;
}
