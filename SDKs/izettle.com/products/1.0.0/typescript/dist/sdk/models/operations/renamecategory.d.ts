import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RenameCategorySecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class RenameCategoryRequest extends SpeakeasyBase {
    renameCategoryRequest: shared.RenameCategoryRequest;
    categoryUuid: string;
    organizationUuid: string;
}
export declare class RenameCategoryResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
