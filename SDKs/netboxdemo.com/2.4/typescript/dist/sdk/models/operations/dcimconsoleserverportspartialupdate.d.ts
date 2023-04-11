import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimConsoleServerPortsPartialUpdateRequest extends SpeakeasyBase {
    writableConsoleServerPortInput: shared.WritableConsoleServerPortInput;
    /**
     * A unique integer value identifying this console server port.
     */
    id: number;
}
export declare class DcimConsoleServerPortsPartialUpdateResponse extends SpeakeasyBase {
    consoleServerPort?: shared.ConsoleServerPort;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
