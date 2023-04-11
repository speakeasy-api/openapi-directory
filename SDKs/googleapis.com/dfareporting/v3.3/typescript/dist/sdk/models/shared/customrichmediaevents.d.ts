import { SpeakeasyBase } from "../../../internal/utils";
import { DimensionValue } from "./dimensionvalue";
/**
 * Represents a Custom Rich Media Events group.
 */
export declare class CustomRichMediaEvents extends SpeakeasyBase {
    /**
     * List of custom rich media event IDs. Dimension values must be all of type dfa:richMediaEventTypeIdAndName.
     */
    filteredEventIds?: DimensionValue[];
    /**
     * The kind of resource this is, in this case dfareporting#customRichMediaEvents.
     */
    kind?: string;
}
