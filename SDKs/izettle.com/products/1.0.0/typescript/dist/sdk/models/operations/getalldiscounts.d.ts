import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllDiscountsSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetAllDiscountsRequest extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetAllDiscountsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * List of all discounts
     */
    discountResponses?: shared.DiscountResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
