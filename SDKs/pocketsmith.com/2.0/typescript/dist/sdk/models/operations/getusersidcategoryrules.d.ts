import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetUsersIdCategoryRulesRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the user.
     */
    id: number;
}
export declare class GetUsersIdCategoryRulesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    categoryRules?: shared.CategoryRule[];
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
