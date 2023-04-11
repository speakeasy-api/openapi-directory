import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateDiscountSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class CreateDiscountRequest extends SpeakeasyBase {
    discountRequest?: shared.DiscountRequest;
    organizationUuid: string;
}
export declare class CreateDiscountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Invalid request body
     */
    errorResponse?: shared.ErrorResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
