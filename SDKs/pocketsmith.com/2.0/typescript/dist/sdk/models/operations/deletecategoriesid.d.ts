import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCategoriesIdRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the category.
     */
    id: number;
}
export declare class DeleteCategoriesIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
