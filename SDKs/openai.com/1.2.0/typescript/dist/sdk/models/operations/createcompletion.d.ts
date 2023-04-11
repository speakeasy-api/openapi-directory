import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCompletionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createCompletionResponse?: shared.CreateCompletionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
