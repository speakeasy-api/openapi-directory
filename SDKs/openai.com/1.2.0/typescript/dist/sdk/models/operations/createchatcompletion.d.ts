import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateChatCompletionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createChatCompletionResponse?: shared.CreateChatCompletionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
