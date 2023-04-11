import { SpeakeasyBase } from "../../../internal/utils";
import { EnrollmentToken } from "./enrollmenttoken";
/**
 * Response to a request to list enrollment tokens for a given enterprise.
 */
export declare class ListEnrollmentTokensResponse extends SpeakeasyBase {
    /**
     * The list of enrollment tokens.
     */
    enrollmentTokens?: EnrollmentToken[];
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string;
}
