import { SpeakeasyBase } from "../../../internal/utils";
import { Container } from "./container";
/**
 * List Containers Response.
 */
export declare class ListContainersResponse extends SpeakeasyBase {
    /**
     * All Containers of a GTM Account.
     */
    container?: Container[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
