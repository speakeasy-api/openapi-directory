import { SpeakeasyBase } from "../../../internal/utils";
import { Finding } from "./finding";
/**
 * Response for the `ListFindings` method.
 */
export declare class ListFindingsResponse extends SpeakeasyBase {
    /**
     * The list of Findings returned.
     */
    findings?: Finding[];
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
}
