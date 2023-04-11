import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResolvePlaceRequest extends SpeakeasyBase {
    apiKey?: string;
    /**
     * ID of place suggestion
     */
    place: string;
}
export declare class ResolvePlaceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Resource not found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Success
     */
    resolvePlaceResponse?: shared.ResolvePlaceResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
