import { SpeakeasyBase } from "../../../internal/utils";
import { AdUnit } from "./adunit";
/**
 * Response definition for the adunit list rpc.
 */
export declare class ListAdUnitsResponse extends SpeakeasyBase {
    /**
     * The ad units returned in the list response.
     */
    adUnits?: AdUnit[];
    /**
     * Continuation token used to page through ad units. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string;
}
