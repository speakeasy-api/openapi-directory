import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAnswerResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createAnswerResponse?: shared.CreateAnswerResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
