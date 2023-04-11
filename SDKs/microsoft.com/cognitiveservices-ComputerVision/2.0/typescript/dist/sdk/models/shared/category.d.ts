import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryDetail } from "./categorydetail";
/**
 * An object describing identified category.
 */
export declare class Category extends SpeakeasyBase {
    /**
     * An object describing additional category details.
     */
    detail?: CategoryDetail;
    /**
     * Name of the category.
     */
    name?: string;
    /**
     * Scoring of the category.
     */
    score?: number;
}
