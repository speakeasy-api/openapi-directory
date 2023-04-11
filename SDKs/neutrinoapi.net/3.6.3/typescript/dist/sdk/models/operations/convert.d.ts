import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ConvertRequest extends SpeakeasyBase {
    /**
     * The type of the value to convert from (e.g. USD)
     */
    fromType: string;
    /**
     * The value to convert from (e.g. 10.95)
     */
    fromValue: string;
    /**
     * The type to convert to (e.g. EUR)
     */
    toType: string;
}
export declare class ConvertResponse extends SpeakeasyBase {
    /**
     * Your API request has been rejected. Check error code for details
     */
    apiError?: shared.APIError;
    contentType: string;
    convertResponse?: shared.ConvertResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
