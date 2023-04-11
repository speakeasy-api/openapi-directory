import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ResolveRequest extends SpeakeasyBase {
    /**
     * ID of address suggestion
     */
    address: string;
    apiKey?: string;
}
export declare class ResolveResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Resource not found
     */
    errorResponse?: shared.ErrorResponse;
    /**
     * Success
     */
    gbrResolveAddressResponse?: shared.GbrResolveAddressResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
