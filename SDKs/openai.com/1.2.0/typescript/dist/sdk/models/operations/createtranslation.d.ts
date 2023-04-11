import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTranslationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    createTranslationResponse?: shared.CreateTranslationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
