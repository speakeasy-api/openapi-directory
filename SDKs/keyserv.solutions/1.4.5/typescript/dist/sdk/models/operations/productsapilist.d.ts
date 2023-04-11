import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductsApiListRequest extends SpeakeasyBase {
    requestBody: any;
    page?: number;
}
export declare class ProductsApiListResponse extends SpeakeasyBase {
    contentType: string;
    productViews?: shared.ProductView[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
