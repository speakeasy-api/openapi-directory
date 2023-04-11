import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetMeConnectionsConnectionIdSecurity extends SpeakeasyBase {
    authHeader: string;
}
export declare class GetMeConnectionsConnectionIdRequest extends SpeakeasyBase {
    /**
     * SoundCloud connection id
     */
    connectionId: number;
}
export declare class GetMeConnectionsConnectionIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    connection?: shared.Connection;
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
