import { SpeakeasyBase } from "../../../internal/utils";
import { AppGateway } from "./appgateway";
/**
 * Response message for BeyondCorp.ListAppGateways.
 */
export declare class ListAppGatewaysResponse extends SpeakeasyBase {
    /**
     * A list of BeyondCorp AppGateways in the project.
     */
    appGateways?: AppGateway[];
    /**
     * A token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * A list of locations that could not be reached.
     */
    unreachable?: string[];
}
