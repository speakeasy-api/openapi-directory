import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateRequestBody extends SpeakeasyBase {
    /**
     * The file to upload and validate
     */
    filename?: string;
    /**
     * The text of an OpenAPI 3.0.x definition to validate
     */
    source?: string;
}
export declare class ValidateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Invalid request
     */
    validate400ApplicationJSONAny?: any;
    /**
     * default
     */
    validationResult?: shared.ValidationResult;
}
