import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Uniquely identifies a single tag in the API.
 *
 * @remarks
 *
 */
export declare class TagInputResourceIdentifier extends SpeakeasyBase {
    /**
     * The label of the tag, which also acts as the tag’s unique identifier.
     *
     * @remarks
     *
     */
    id: string;
    /**
     * The type of this resource: `tags`
     */
    type: string;
}
