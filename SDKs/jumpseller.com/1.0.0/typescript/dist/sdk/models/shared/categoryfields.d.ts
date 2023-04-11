import { SpeakeasyBase } from "../../../internal/utils";
export declare class CategoryFields extends SpeakeasyBase {
    /**
     * Unique identifier of the Category
     */
    id?: number;
    /**
     * Name of the Category
     */
    name?: string;
    /**
     * Unique identifier of the Parent Category
     */
    parentId?: number;
    /**
     * Category unique URL path
     */
    permalink?: string;
}
