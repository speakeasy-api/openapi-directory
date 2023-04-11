import { SpeakeasyBase } from "../../../internal/utils";
import { Enterprise } from "./enterprise";
/**
 * Response to a request to list enterprises.
 */
export declare class ListEnterprisesResponse extends SpeakeasyBase {
    /**
     * The list of enterprises.
     */
    enterprises?: Enterprise[];
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string;
}
