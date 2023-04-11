import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateTranslationMemoryUnitResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Corporate id, source language, target language, source string or target string is not provided
     */
    error?: shared.ErrorT;
    /**
     * Translation updated by adding new translation memory unit
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
