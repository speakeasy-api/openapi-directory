import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetServerOptionsRequest extends SpeakeasyBase {
    /**
     * The target language for the server framework
     */
    framework: string;
}
export declare class GetServerOptionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    getServerOptions200ApplicationJSONObject?: Record<string, shared.CliOption>;
}
