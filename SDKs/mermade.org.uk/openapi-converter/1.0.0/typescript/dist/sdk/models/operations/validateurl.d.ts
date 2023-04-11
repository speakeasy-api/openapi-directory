import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateUrlRequest extends SpeakeasyBase {
    /**
     * The URL to retrieve the OpenAPI 3.0.x definition from
     */
    url: string;
}
export declare class ValidateUrlResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * default
     */
    validationResult?: shared.ValidationResult;
}
