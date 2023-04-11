import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAllProductsV2Security extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetAllProductsV2Request extends SpeakeasyBase {
    organizationUuid: string;
    /**
     * If true, sorts response by created date
     */
    sort?: boolean;
}
export declare class GetAllProductsV2Response extends SpeakeasyBase {
    contentType: string;
    /**
     * A list of products
     */
    productResponses?: shared.ProductResponse[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
