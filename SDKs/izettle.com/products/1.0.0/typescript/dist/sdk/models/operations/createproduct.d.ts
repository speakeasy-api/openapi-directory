import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProductSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class CreateProductRequest extends SpeakeasyBase {
    productCreateRequest: shared.ProductCreateRequest;
    organizationUuid: string;
    returnEntity?: boolean;
}
export declare class CreateProductResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    /**
     * Product created. It will include the Product in the response only if 'returnEntity' is true
     */
    productResponse?: shared.ProductResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
