import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCategoriesIdCategoryRulesRequestBody extends SpeakeasyBase {
    /**
     * Apply the created category rule to all transactions.
     */
    applyToAll?: boolean;
    /**
     * Apply the created category rule to all uncategorised transactions.
     */
    applyToUncategorised?: boolean;
    /**
     * The keyword/s to match the transaction payees.
     */
    payeeMatches: string;
}
export declare class PostCategoriesIdCategoryRulesRequest extends SpeakeasyBase {
    requestBody?: PostCategoriesIdCategoryRulesRequestBody;
    /**
     * The unique identifier of the category.
     */
    id: number;
}
export declare class PostCategoriesIdCategoryRulesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    categoryRule?: shared.CategoryRule;
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
