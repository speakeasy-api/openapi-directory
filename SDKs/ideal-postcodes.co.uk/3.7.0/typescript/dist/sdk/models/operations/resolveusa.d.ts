import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResolveUsaRequest extends SpeakeasyBase {
    /**
     * ID of address suggestion
     */
    address: string;
    apiKey?: string;
}
export declare class ResolveUsaResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Resource not found
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    usaResolveAddressResponse?: shared.UsaResolveAddressResponse;
}
