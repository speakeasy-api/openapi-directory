import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ProductNumberSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ProductNumberRequest extends SpeakeasyBase {
    /**
     * Unique number that identifies the Product.
     */
    productNumber: string;
}
export declare class ProductNumberResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Successful request
     */
    netlicensing?: shared.Netlicensing;
}
