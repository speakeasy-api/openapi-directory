import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RetrieveModelRequest extends SpeakeasyBase {
    /**
     * The ID of the model to use for this request
     */
    model: string;
}
export declare class RetrieveModelResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    model?: shared.Model;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
