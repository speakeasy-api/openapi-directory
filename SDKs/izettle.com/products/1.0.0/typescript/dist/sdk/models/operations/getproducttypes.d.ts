import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetProductTypesSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class GetProductTypesRequest extends SpeakeasyBase {
    organizationUuid: string;
}
export declare class GetProductTypesResponse extends SpeakeasyBase {
    /**
     * List of all categories
     */
    categoryResponse?: shared.CategoryResponse;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
