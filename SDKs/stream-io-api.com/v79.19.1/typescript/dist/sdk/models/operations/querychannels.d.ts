import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class QueryChannelsRequest extends SpeakeasyBase {
    /**
     * Query Channels Request
     */
    queryChannelsRequest: shared.QueryChannelsRequest;
    clientId?: string;
    connectionId?: string;
}
export declare class QueryChannelsResponse extends SpeakeasyBase {
    /**
     * Bad request
     */
    apiError?: shared.APIError;
    /**
     * Channels list
     */
    channelsResponse?: shared.ChannelsResponse;
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
