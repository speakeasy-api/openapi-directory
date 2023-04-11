import { SpeakeasyBase } from "../../../internal/utils";
import { AdWordsAccount } from "./adwordsaccount";
import { WebPropertyRef } from "./webpropertyref";
/**
 * Web property being linked.
 */
export declare class EntityAdWordsLinkEntity extends SpeakeasyBase {
    /**
     * JSON template for a web property reference.
     */
    webPropertyRef?: WebPropertyRef;
}
/**
 * JSON template for Analytics Entity Google Ads Link.
 */
export declare class EntityAdWordsLink extends SpeakeasyBase {
    /**
     * A list of Google Ads client accounts. These cannot be MCC accounts. This field is required when creating a Google Ads link. It cannot be empty.
     */
    adWordsAccounts?: AdWordsAccount[];
    /**
     * Web property being linked.
     */
    entity?: EntityAdWordsLinkEntity;
    /**
     * Entity Google Ads link ID
     */
    id?: string;
    /**
     * Resource type for entity Google Ads link.
     */
    kind?: string;
    /**
     * Name of the link. This field is required when creating a Google Ads link.
     */
    name?: string;
    /**
     * IDs of linked Views (Profiles) represented as strings.
     */
    profileIds?: string[];
    /**
     * URL link for this Google Analytics - Google Ads link.
     */
    selfLink?: string;
}
