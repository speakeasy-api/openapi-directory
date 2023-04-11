import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A reference to a property relative to the kind expressions.
 */
export declare class PropertyReference extends SpeakeasyBase {
    /**
     * The name of the property. If name includes "."s, it may be interpreted as a property name path.
     */
    name?: string;
}
