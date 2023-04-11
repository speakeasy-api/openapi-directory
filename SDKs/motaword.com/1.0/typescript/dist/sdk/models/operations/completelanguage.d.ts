import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CompleteLanguageRequest extends SpeakeasyBase {
    /**
     * Continuous project ID
     */
    id: number;
    /**
     * Target language that you want to complete
     */
    targetLanguage: string;
}
export declare class CompleteLanguageResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Operation status
     */
    operationStatus?: shared.OperationStatus;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
