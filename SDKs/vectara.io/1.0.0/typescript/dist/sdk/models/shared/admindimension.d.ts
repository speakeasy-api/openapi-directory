import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A custom dimension is additional numeric metadata that you want to affect
 *
 * @remarks
 * Vectara's scoring.  For example, these could be "number of stars" ratings,
 * or other business metrics like a product's margins that you want to use
 * to boost where a result is in the list.
 */
export declare class AdminDimension extends SpeakeasyBase {
    /**
     * A description for the custom dimension.
     */
    description?: string;
    /**
     * The default value to give to documents for this custom dimension.
     */
    indexingDefault?: number;
    /**
     * The name of the custom dimension.  The maximum length of the name is
     *
     * @remarks
     * 8 characters.
     */
    name?: string;
    /**
     * The default weight to give this dimension when running queries. A value of
     *
     * @remarks
     * 0.0, for example, gives it no weight at all.
     */
    servingDefault?: number;
}
