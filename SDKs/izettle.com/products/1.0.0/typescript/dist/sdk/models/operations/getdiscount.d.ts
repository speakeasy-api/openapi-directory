import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetDiscountSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetDiscountRequest extends SpeakeasyBase {
    ifNoneMatch?: string;
    discountUuid: string;
    organizationUuid: string;
}
export declare class GetDiscountResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Discount
     */
    discountResponse?: shared.DiscountResponse;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
