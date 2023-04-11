import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimConsoleServerPortTemplatesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this console server port template.
     */
    id: number;
}
export declare class DcimConsoleServerPortTemplatesReadResponse extends SpeakeasyBase {
    consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
