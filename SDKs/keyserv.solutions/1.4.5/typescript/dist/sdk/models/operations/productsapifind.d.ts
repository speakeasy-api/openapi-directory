import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ProductsApiFindRequest extends SpeakeasyBase {
    requestBody: any;
    page?: number;
}
export declare class ProductsApiFindResponse extends SpeakeasyBase {
    contentType: string;
    productsApiFind200ApplicationJSONOneOf?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
