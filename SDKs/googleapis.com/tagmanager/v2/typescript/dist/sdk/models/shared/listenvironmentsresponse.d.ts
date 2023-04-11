import { SpeakeasyBase } from "../../../internal/utils";
import { Environment } from "./environment";
/**
 * List Environments Response.
 */
export declare class ListEnvironmentsResponse extends SpeakeasyBase {
    /**
     * All Environments of a GTM Container.
     */
    environment?: Environment[];
    /**
     * Continuation token for fetching the next page of results.
     */
    nextPageToken?: string;
}
