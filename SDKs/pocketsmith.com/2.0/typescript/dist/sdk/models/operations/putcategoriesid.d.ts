import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Set the refund behaviour of the category.
 */
export declare enum PutCategoriesIdRequestBodyRefundBehaviourEnum {
    DebitsAreDeductions = "debits_are_deductions",
    CreditsAreRefunds = "credits_are_refunds",
    Null = "null"
}
export declare class PutCategoriesIdRequestBody extends SpeakeasyBase {
    /**
     * A new CSS-style hex colour for the category.
     */
    colour?: string;
    /**
     * Set the category as a bill category.
     */
    isBill?: boolean;
    /**
     * Set the category as a transfer category.
     */
    isTransfer?: boolean;
    /**
     * The unique identifier of a parent category for the category, making this category a child of that category.
     */
    parentId?: number;
    /**
     * Set the refund behaviour of the category.
     */
    refundBehaviour?: PutCategoriesIdRequestBodyRefundBehaviourEnum;
    /**
     * Set the category to be rolled up into its parent category.
     */
    rollUp?: boolean;
    /**
     * A new title for the category.
     */
    title?: string;
}
export declare class PutCategoriesIdRequest extends SpeakeasyBase {
    requestBody?: PutCategoriesIdRequestBody;
    /**
     * The unique identifier of the category.
     */
    id: number;
}
export declare class PutCategoriesIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    category?: shared.Category;
    contentType: string;
    /**
     * Not Allowed
     */
    error?: shared.ErrorT;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
