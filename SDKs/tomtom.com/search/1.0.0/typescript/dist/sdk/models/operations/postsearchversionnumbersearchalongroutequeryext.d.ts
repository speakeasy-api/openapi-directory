import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints extends SpeakeasyBase {
    lat?: number;
    lon?: number;
}
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute extends SpeakeasyBase {
    points?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoutePoints[];
}
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody extends SpeakeasyBase {
    route?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBodyRoute;
}
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtRequest extends SpeakeasyBase {
    requestBody?: PostSearchVersionNumberSearchAlongRouteQueryExtRequestBody;
    /**
     * Expected response format.
     */
    ext: shared.ExtEnum;
    /**
     * Maximum number of search results that will be returned.
     */
    limit?: number;
    /**
     * Maximum detour time
     */
    maxDetourTime: number;
    /**
     * Query string. Must be properly URL encoded.
     */
    query: string;
    /**
     * Service version number. The current value is 2.
     */
    versionNumber: shared.VersionNumberEnum;
}
export declare class PostSearchVersionNumberSearchAlongRouteQueryExtResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
