import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An application category object.
 */
export declare class ApplicationCategory extends SpeakeasyBase {
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#applicationCategory`.
     */
    kind?: string;
    /**
     * The primary category.
     */
    primary?: string;
    /**
     * The secondary category.
     */
    secondary?: string;
}
