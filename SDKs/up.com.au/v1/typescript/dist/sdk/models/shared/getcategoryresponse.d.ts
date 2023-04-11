import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryResource } from "./categoryresource";
/**
 * Successful response to get a single category and its ancestry.
 *
 * @remarks
 *
 */
export declare class GetCategoryResponse extends SpeakeasyBase {
    /**
     * The category returned in this response.
     *
     * @remarks
     *
     */
    data: CategoryResource;
}
