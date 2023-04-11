import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdCategoriesRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the user.
     */
    id: number;
}
export declare class GetUsersIdCategoriesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    categories?: shared.Category[];
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
