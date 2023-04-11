import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    openAIFile?: shared.OpenAIFile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
