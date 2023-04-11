import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCommandsTypesRequest extends SpeakeasyBase {
    /**
     * Internal device identifier. Only works if device has already reported some locations
     */
    deviceId?: number;
    /**
     * Protocol name. Can be used instead of device id
     */
    protocol?: string;
    /**
     * When `true` return SMS commands. If not specified or `false` return data commands
     */
    textChannel?: boolean;
}
export declare class GetCommandsTypesResponse extends SpeakeasyBase {
    /**
     * OK
     */
    commandTypes?: shared.CommandType[];
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
