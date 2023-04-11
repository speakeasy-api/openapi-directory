import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductsRequest extends SpeakeasyBase {
    /**
     * `id` for a specific producer.
     */
    producerId?: string;
}
/**
 * Bad Request: something was wrong with the included query param(s)
 */
export declare class GetProducts400ApplicationJSON extends SpeakeasyBase {
    errors?: shared.ErrorV1[];
}
/**
 * OK
 */
export declare class GetProducts200ApplicationJSON extends SpeakeasyBase {
    products?: shared.ProductV1[];
}
export declare class GetProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    getProducts200ApplicationJSONObject?: GetProducts200ApplicationJSON;
    /**
     * Bad Request: something was wrong with the included query param(s)
     */
    getProducts400ApplicationJSONObject?: GetProducts400ApplicationJSON;
}
