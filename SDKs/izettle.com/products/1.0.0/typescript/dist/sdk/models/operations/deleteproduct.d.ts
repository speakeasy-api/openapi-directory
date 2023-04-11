import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProductSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class DeleteProductRequest extends SpeakeasyBase {
    organizationUuid: string;
    productUuid: string;
}
export declare class DeleteProductResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
