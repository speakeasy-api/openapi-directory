import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApiConfig } from "./apigatewayapiconfig";
/**
 * Response message for ApiGatewayService.ListApiConfigs
 */
export declare class ApigatewayListApiConfigsResponse extends SpeakeasyBase {
    /**
     * API Configs.
     */
    apiConfigs?: ApigatewayApiConfig[];
    /**
     * Next page token.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachableLocations?: string[];
}
