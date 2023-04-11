import { SpeakeasyBase } from "../../../internal/utils";
import { GrpcRoute } from "./grpcroute";
/**
 * Response returned by the ListGrpcRoutes method.
 */
export declare class ListGrpcRoutesResponse extends SpeakeasyBase {
    /**
     * List of GrpcRoute resources.
     */
    grpcRoutes?: GrpcRoute[];
    /**
     * If there might be more results than those appearing in this response, then `next_page_token` is included. To get the next set of results, call this method again using the value of `next_page_token` as `page_token`.
     */
    nextPageToken?: string;
}
