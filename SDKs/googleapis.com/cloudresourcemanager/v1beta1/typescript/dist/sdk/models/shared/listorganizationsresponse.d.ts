import { SpeakeasyBase } from "../../../internal/utils";
import { Organization } from "./organization";
/**
 * The response returned from the `ListOrganizations` method.
 */
export declare class ListOrganizationsResponse extends SpeakeasyBase {
    /**
     * A pagination token to be used to retrieve the next page of results. If the result is too large to fit within the page size specified in the request, this field will be set with a token that can be used to fetch the next page of results. If this field is empty, it indicates that this response contains the last page of results.
     */
    nextPageToken?: string;
    /**
     * The list of Organizations that matched the list query, possibly paginated.
     */
    organizations?: Organization[];
}
