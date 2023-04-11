import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateProductSlugSecurity extends SpeakeasyBase {
    zettleOauth: string;
}
export declare class CreateProductSlugRequest extends SpeakeasyBase {
    createSlugRequest: shared.CreateSlugRequest;
    organizationUuid: string;
}
export declare class CreateProductSlugResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Product slug
     */
    slugResponse?: shared.SlugResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
