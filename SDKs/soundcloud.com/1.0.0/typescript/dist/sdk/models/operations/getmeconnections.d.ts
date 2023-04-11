import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMeConnectionsSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class GetMeConnectionsRequest extends SpeakeasyBase {
    /**
     * Number of results to return in the collection.
     */
    limit?: number;
    /**
     * Offset of first result. Deprecated, use `linked_partitioning` instead.
     */
    offset?: number;
}
export declare class GetMeConnectionsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    connections?: shared.Connection[];
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
