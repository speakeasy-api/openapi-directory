import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteProductSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteProductRequest extends SpeakeasyBase {
    /**
     * Force object deletion and all descendants.
     */
    forceCascade?: boolean;
    /**
     * Unique number that identifies the Product.
     */
    productNumber: string;
}
export declare class DeleteProductResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
