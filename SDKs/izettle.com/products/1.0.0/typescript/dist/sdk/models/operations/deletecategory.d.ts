import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteCategorySecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class DeleteCategoryRequest extends SpeakeasyBase {
    categoryUuid: string;
    organizationUuid: string;
}
export declare class DeleteCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
