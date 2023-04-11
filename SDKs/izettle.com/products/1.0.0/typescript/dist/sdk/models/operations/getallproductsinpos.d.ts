import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllProductsInPosSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetAllProductsInPosRequest extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetAllProductsInPosResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of products
     */
    productResponses?: shared.ProductResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
