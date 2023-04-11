import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetProductRequest extends SpeakeasyBase {
    ifNoneMatch?: string;
    organizationUuid: string;
    productUuid: string;
}
export declare class GetProductResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Product
     */
    productResponse?: shared.ProductResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
