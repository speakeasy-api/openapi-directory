import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductsApiDeleteProductRequest extends SpeakeasyBase {
    xApiKey: string;
    serial: string;
}
export declare class ProductsApiDeleteProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
