import { SpeakeasyBase } from "../../../internal/utils";
import { Creative } from "./creative";
/**
 * The creatives feed lists the active creatives for the Ad Exchange buyer accounts that the user has access to. Each entry in the feed corresponds to a single creative.
 */
export declare class CreativesList extends SpeakeasyBase {
    /**
     * A list of creatives.
     */
    items?: Creative[];
    /**
     * Resource type.
     */
    kind?: string;
    /**
     * Continuation token used to page through creatives. To retrieve the next page of results, set the next request's "pageToken" value to this.
     */
    nextPageToken?: string;
}
