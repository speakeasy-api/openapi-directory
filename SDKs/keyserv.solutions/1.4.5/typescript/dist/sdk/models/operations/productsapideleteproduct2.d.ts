import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductsApiDeleteProduct2Request extends SpeakeasyBase {
    xApiKey: string;
    serial: string;
}
export declare class ProductsApiDeleteProduct2Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
