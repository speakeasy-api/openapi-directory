import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostStringsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Machine Translated Strings in JSON
     */
    machineTranslatedStrings?: shared.MachineTranslatedStrings;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
