import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Set the refund behaviour of the category.
 */
export declare enum PostUsersIdCategoriesRequestBodyRefundBehaviourEnum {
    DebitsAreDeductions = "debits_are_deductions",
    CreditsAreRefunds = "credits_are_refunds",
    Null = "null"
}
export declare class PostUsersIdCategoriesRequestBody extends SpeakeasyBase {
    /**
     * A CSS-style hex colour for the category.
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
     * The unique identifier of a category to be the parent of this category.
     */
    parentId?: number;
    /**
     * Set the refund behaviour of the category.
     */
    refundBehaviour?: PostUsersIdCategoriesRequestBodyRefundBehaviourEnum;
    /**
     * Set the category to be rolled up into its parent category.
     */
    rollUp?: boolean;
    /**
     * A title for the category.
     */
    title: string;
}
export declare class PostUsersIdCategoriesRequest extends SpeakeasyBase {
    requestBody?: PostUsersIdCategoriesRequestBody;
    /**
     * The unique identifier of the user.
     */
    id: number;
}
export declare class PostUsersIdCategoriesResponse extends SpeakeasyBase {
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
