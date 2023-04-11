import { SpeakeasyBase } from "../../../internal/utils";
import { UnmappedIdentity } from "./unmappedidentity";
/**
 * Successful response
 */
export declare class ListUnmappedIdentitiesResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    unmappedIdentities?: UnmappedIdentity[];
}
