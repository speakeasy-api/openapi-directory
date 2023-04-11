import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimConsoleServerPortTemplatesCreateResponse extends SpeakeasyBase {
    consoleServerPortTemplate?: shared.ConsoleServerPortTemplate;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
