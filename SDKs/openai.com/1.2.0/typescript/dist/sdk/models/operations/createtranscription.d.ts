import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTranscriptionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createTranscriptionResponse?: shared.CreateTranscriptionResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
