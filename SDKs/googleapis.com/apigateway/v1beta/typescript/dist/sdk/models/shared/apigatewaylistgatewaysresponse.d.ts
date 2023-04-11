import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayGateway } from "./apigatewaygateway";
/**
 * Response message for ApiGatewayService.ListGateways
 */
export declare class ApigatewayListGatewaysResponse extends SpeakeasyBase {
    /**
     * Gateways.
     */
    gateways?: ApigatewayGateway[];
    /**
     * Next page token.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachableLocations?: string[];
}
