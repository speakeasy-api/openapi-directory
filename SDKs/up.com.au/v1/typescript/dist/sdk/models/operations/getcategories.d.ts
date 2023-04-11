import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCategoriesRequest extends SpeakeasyBase {
    /**
     * The unique identifier of a parent category for which to
     *
     * @remarks
     * return only its children. Providing an invalid category
     * identifier results in a `404` response.
     *
     */
    filterParent?: string;
}
export declare class GetCategoriesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful Response
     */
    listCategoriesResponse?: shared.ListCategoriesResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
