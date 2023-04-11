import { SpeakeasyBase } from "../../../internal/utils";
import { ApigatewayApi } from "./apigatewayapi";
/**
 * Response message for ApiGatewayService.ListApis
 */
export declare class ApigatewayListApisResponse extends SpeakeasyBase {
    /**
     * APIs.
     */
    apis?: ApigatewayApi[];
    /**
     * Next page token.
     */
    nextPageToken?: string;
    /**
     * Locations that could not be reached.
     */
    unreachableLocations?: string[];
}
