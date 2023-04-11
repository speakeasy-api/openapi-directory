import { SpeakeasyBase } from "../../../internal/utils";
export declare class FullCategory extends SpeakeasyBase {
    /**
     * The type of category. (E.g. tech, incentive, regulation, user)
     */
    categoryType: string;
    /**
     * The code used to identify the category
     */
    code: string;
    /**
     * A short description of what the law category encompasses
     */
    helpText?: string;
    /**
     * The sort order for the categories
     */
    sortOrder: string;
    /**
     * The full name of the category
     */
    title: string;
}
