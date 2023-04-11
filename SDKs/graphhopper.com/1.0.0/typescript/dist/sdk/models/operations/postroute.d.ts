import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostRouteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Your request is not valid. For example, you specified too few or too many points.
     */
    ghError?: shared.GHError;
    headers?: Record<string, string[]>;
    /**
     * Routing Result
     */
    routeResponse?: shared.RouteResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
