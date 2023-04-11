import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CountAllProductsSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class CountAllProductsRequest extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class CountAllProductsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Count of existing products
     */
    productCountResponses?: shared.ProductCountResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
