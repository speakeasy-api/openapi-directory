import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimConsolePortsTraceRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this console port.
     */
    id: number;
}
export declare class DcimConsolePortsTraceResponse extends SpeakeasyBase {
    consolePort?: shared.ConsolePort;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
