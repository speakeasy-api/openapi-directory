import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostOauth2TokenSecurity extends SpeakeasyBase {
    clientId: string;
}
export declare class PostOauth2TokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Unauthorized
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Bad Request
     */
    postOauth2Token400ApplicationJSONOneOf?: any;
}
