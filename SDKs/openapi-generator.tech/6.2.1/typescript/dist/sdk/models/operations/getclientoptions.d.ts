import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetClientOptionsRequest extends SpeakeasyBase {
    /**
     * The target language for the client library
     */
    language: string;
}
export declare class GetClientOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getClientOptions200ApplicationJSONObject?: Record<string, shared.CliOption>;
}
