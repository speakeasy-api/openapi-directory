import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteProductsSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class DeleteProductsRequest extends SpeakeasyBase {
    organizationUuid: string;
    /**
     * List of product UUIDs to be deleted
     */
    uuid: string[];
}
export declare class DeleteProductsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
