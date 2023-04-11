import { SpeakeasyBase } from "../../../internal/utils";
import { AdClient } from "./adclient";
/**
 * Response definition for the ad client list rpc.
 */
export declare class ListAdClientsResponse extends SpeakeasyBase {
    /**
     * The ad clients returned in this list response.
     */
    adClients?: AdClient[];
    /**
     * Continuation token used to page through ad clients. To retrieve the next page of the results, set the next request's "page_token" value to this.
     */
    nextPageToken?: string;
}
