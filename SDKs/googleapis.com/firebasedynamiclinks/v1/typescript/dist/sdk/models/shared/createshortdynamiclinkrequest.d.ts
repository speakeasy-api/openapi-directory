import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";
import { Suffix } from "./suffix";
/**
 * Request to create a short Dynamic Link.
 */
export declare class CreateShortDynamicLinkRequest extends SpeakeasyBase {
    /**
     * Information about a Dynamic Link.
     */
    dynamicLinkInfo?: DynamicLinkInfo;
    /**
     * Full long Dynamic Link URL with desired query parameters specified. For example, "https://sample.app.goo.gl/?link=http://www.google.com&apn=com.sample", [Learn more](https://firebase.google.com/docs/reference/dynamic-links/link-shortener).
     */
    longDynamicLink?: string;
    /**
     * Google SDK version. Version takes the form "$major.$minor.$patch"
     */
    sdkVersion?: string;
    /**
     * Short Dynamic Link suffix.
     */
    suffix?: Suffix;
}
