import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimConsoleServerPortsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this console server port.
     */
    id: number;
}
export declare class DcimConsoleServerPortsReadResponse extends SpeakeasyBase {
    consoleServerPort?: shared.ConsoleServerPort;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
