import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValidateRequest extends SpeakeasyBase {
    /**
     * Integer ID
     */
    id: number;
    /**
     * List of tags
     */
    tag?: string[];
    /**
     * User agent
     */
    userAgent?: string;
}
export declare class ValidateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    testValidate?: shared.TestValidate;
}
