import { SpeakeasyBase } from "../../../internal/utils";
import { Zone } from "./zone";
/**
 * Successful response
 */
export declare class ListZonesResponse extends SpeakeasyBase {
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
    /**
     * All GTM Zones of a GTM Container.
     */
    zone?: Zone[];
}
