import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveFileRequest extends SpeakeasyBase {
    /**
     * The ID of the file to use for this request
     */
    fileId: string;
}
export declare class RetrieveFileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    openAIFile?: shared.OpenAIFile;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
