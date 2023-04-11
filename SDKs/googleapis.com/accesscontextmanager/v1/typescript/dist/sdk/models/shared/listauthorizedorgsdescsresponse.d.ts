import { SpeakeasyBase } from "../../../internal/utils";
import { AuthorizedOrgsDesc } from "./authorizedorgsdesc";
/**
 * A response to `ListAuthorizedOrgsDescsRequest`.
 */
export declare class ListAuthorizedOrgsDescsResponse extends SpeakeasyBase {
    /**
     * List of all the Authorized Orgs Desc instances.
     */
    authorizedOrgsDescs?: AuthorizedOrgsDesc[];
    /**
     * The pagination token to retrieve the next page of results. If the value is empty, no further results remain.
     */
    nextPageToken?: string;
}
