import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents a dimension.
 */
export declare class Dimension extends SpeakeasyBase {
    /**
     * The kind of resource this is, in this case dfareporting#dimension.
     */
    kind?: string;
    /**
     * The dimension name, e.g. advertiser
     */
    name?: string;
}
