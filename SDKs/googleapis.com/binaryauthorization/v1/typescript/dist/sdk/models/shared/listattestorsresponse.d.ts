import { SpeakeasyBase } from "../../../internal/utils";
import { Attestor } from "./attestor";
/**
 * Response message for BinauthzManagementService.ListAttestors.
 */
export declare class ListAttestorsResponse extends SpeakeasyBase {
    /**
     * The list of attestors.
     */
    attestors?: Attestor[];
    /**
     * A token to retrieve the next page of results. Pass this value in the ListAttestorsRequest.page_token field in the subsequent call to the `ListAttestors` method to retrieve the next page of results.
     */
    nextPageToken?: string;
}
