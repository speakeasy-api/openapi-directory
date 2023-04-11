import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateDiscountSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class UpdateDiscountRequest extends SpeakeasyBase {
    discountRequest: shared.DiscountRequest;
    ifMatch?: string;
    discountUuid: string;
    organizationUuid: string;
}
export declare class UpdateDiscountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid request body
     */
    errorResponse?: shared.ErrorResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
