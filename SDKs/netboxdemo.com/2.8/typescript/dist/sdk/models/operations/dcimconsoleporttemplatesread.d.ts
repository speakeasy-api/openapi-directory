import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimConsolePortTemplatesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this console port template.
     */
    id: number;
}
export declare class DcimConsolePortTemplatesReadResponse extends SpeakeasyBase {
    consolePortTemplate?: shared.ConsolePortTemplate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
