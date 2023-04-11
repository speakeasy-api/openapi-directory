import { SpeakeasyBase } from "../../../internal/utils";
import { Case } from "./case";
/**
 * The response message for the ListCases endpoint.
 */
export declare class ListCasesResponse extends SpeakeasyBase {
    /**
     * The list of cases associated with the cloud resource, after any filters have been applied.
     */
    cases?: Case[];
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `ListCasesRequest` message that is issued. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string;
}
