import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateCategoriesSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class CreateCategoriesRequest extends SpeakeasyBase {
    createCategoriesRequest: shared.CreateCategoriesRequest;
    organizationUuid: string;
}
export declare class CreateCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
