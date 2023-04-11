import { SpeakeasyBase } from "../../../internal/utils";
import { Version } from "./version";
/**
 * Response with the list of the versions for the specified script project.
 */
export declare class ListVersionsResponse extends SpeakeasyBase {
    /**
     * The token use to fetch the next page of records. if not exist in the response, that means no more versions to list.
     */
    nextPageToken?: string;
    /**
     * The list of versions.
     */
    versions?: Version[];
}
