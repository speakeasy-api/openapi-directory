import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimConsolePortsUpdateRequest extends SpeakeasyBase {
    writableConsolePortInput: shared.WritableConsolePortInput;
    /**
     * A unique integer value identifying this console port.
     */
    id: number;
}
export declare class DcimConsolePortsUpdateResponse extends SpeakeasyBase {
    consolePort?: shared.ConsolePort;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
