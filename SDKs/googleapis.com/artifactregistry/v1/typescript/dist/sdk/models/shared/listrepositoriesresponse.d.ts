import { SpeakeasyBase } from "../../../internal/utils";
import { Repository } from "./repository";
/**
 * The response from listing repositories.
 */
export declare class ListRepositoriesResponse extends SpeakeasyBase {
    /**
     * The token to retrieve the next page of repositories, or empty if there are no more repositories to return.
     */
    nextPageToken?: string;
    /**
     * The repositories returned.
     */
    repositories?: Repository[];
}
