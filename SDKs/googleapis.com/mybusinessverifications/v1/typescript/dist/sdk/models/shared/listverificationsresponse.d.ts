import { SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";
/**
 * Response message for Verifications.ListVerifications.
 */
export declare class ListVerificationsResponse extends SpeakeasyBase {
    /**
     * If the number of verifications exceeded the requested page size, this field will be populated with a token to fetch the next page of verification on a subsequent call. If there are no more attributes, this field will not be present in the response.
     */
    nextPageToken?: string;
    /**
     * List of the verifications.
     */
    verifications?: Verification[];
}
