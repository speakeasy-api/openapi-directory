import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicLinkInfo } from "./dynamiclinkinfo";
export declare enum ManagedShortLinkFlaggedAttributeEnum {
    UnspecifiedAttribute = "UNSPECIFIED_ATTRIBUTE",
    Spam = "SPAM"
}
/**
 * Visibility status of link.
 */
export declare enum ManagedShortLinkVisibilityEnum {
    UnspecifiedVisibility = "UNSPECIFIED_VISIBILITY",
    Unarchived = "UNARCHIVED",
    Archived = "ARCHIVED",
    NeverShown = "NEVER_SHOWN"
}
/**
 * Managed Short Link.
 */
export declare class ManagedShortLink extends SpeakeasyBase {
    /**
     * Creation timestamp of the short link.
     */
    creationTime?: string;
    /**
     * Attributes that have been flagged about this short url.
     */
    flaggedAttribute?: ManagedShortLinkFlaggedAttributeEnum[];
    /**
     * Information about a Dynamic Link.
     */
    info?: DynamicLinkInfo;
    /**
     * Short durable link url, for example, "https://sample.app.goo.gl/xyz123". Required.
     */
    link?: string;
    /**
     * Link name defined by the creator. Required.
     */
    linkName?: string;
    /**
     * Visibility status of link.
     */
    visibility?: ManagedShortLinkVisibilityEnum;
}
