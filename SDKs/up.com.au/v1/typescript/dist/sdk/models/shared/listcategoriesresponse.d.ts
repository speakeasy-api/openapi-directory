import { SpeakeasyBase } from "../../../internal/utils";
import { CategoryResource } from "./categoryresource";
/**
 * Successful response to get all categories and their ancestry. The
 *
 * @remarks
 * returned list is not paginated.
 *
 */
export declare class ListCategoriesResponse extends SpeakeasyBase {
    /**
     * The list of categories returned in this response.
     *
     * @remarks
     *
     */
    data: CategoryResource[];
}
