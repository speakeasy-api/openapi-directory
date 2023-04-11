import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResultsReadRequest extends SpeakeasyBase {
    /**
     * Id of the result_file for which the result_file_url is generated.
     */
    resultFileId: string;
}
export declare class ResultsReadResponse extends SpeakeasyBase {
    contentType: string;
    resultResponse?: shared.ResultResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
