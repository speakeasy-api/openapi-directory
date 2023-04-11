import { SpeakeasyBase } from "../../../internal/utils";
import { CaseClassification } from "./caseclassification";
/**
 * The response message for SearchCaseClassifications endpoint.
 */
export declare class SearchCaseClassificationsResponse extends SpeakeasyBase {
    /**
     * The classifications retrieved.
     */
    caseClassifications?: CaseClassification[];
    /**
     * A token to retrieve the next page of results. This should be set in the `page_token` field of subsequent `SearchCaseClassificationsRequest` message that is issued. If unspecified, there are no more results to retrieve.
     */
    nextPageToken?: string;
}
