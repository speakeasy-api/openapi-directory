import { SpeakeasyBase } from "../../../internal/utils";
/**
 * How the category's refunds or deductions should be reported on.
 */
export declare enum CategoryRefundBehaviourEnum {
    DebitsAreDeductions = "debits_are_deductions",
    CreditsAreRefunds = "credits_are_refunds",
    Null = "null"
}
/**
 * Success
 */
export declare class Category extends SpeakeasyBase {
    /**
     * The category's child categories.
     */
    children?: Category[];
    /**
     * The colour for the category.
     */
    colour?: string;
    /**
     * When the category was created.
     */
    createdAt?: string;
    /**
     * The unique identifier of the category.
     */
    id?: number;
    /**
     * Whether the category is a bill category. A bill category is when budgeted amounts are normally spent at once, instead of spread across a budgeting period. This category will be included in the bill reminder email when set to true.
     */
    isBill?: boolean;
    /**
     * Whether this category has been marked as a transfer category.
     */
    isTransfer?: boolean;
    /**
     * The unique identifier of the parent category of this category, or null if this category has no parent (i.e. is a top-level category)
     */
    parentId?: number;
    /**
     * How the category's refunds or deductions should be reported on.
     */
    refundBehaviour?: CategoryRefundBehaviourEnum;
    /**
     * Whether the category's budget is rolled up into its parent category, if a parent category is present.
     */
    rollUp?: boolean;
    /**
     * The title of the category.
     */
    title?: string;
    /**
     * When the category was last updated.
     */
    updatedAt?: string;
}
