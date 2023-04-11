import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A category that the law applies to
 */
export declare class Category extends SpeakeasyBase {
    /**
     * The type of category. (E.g. tech, incentive, regulation, user)
     */
    categoryType: string;
    /**
     * The code used to identify the category
     */
    code: string;
    /**
     * The full name of the category
     */
    title: string;
}
