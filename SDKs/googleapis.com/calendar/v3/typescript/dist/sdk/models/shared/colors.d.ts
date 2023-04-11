import { SpeakeasyBase } from "../../../internal/utils";
import { ColorDefinition } from "./colordefinition";
/**
 * Successful response
 */
export declare class Colors extends SpeakeasyBase {
    /**
     * A global palette of calendar colors, mapping from the color ID to its definition. A calendarListEntry resource refers to one of these color IDs in its colorId field. Read-only.
     */
    calendar?: Record<string, ColorDefinition>;
    /**
     * A global palette of event colors, mapping from the color ID to its definition. An event resource may refer to one of these color IDs in its colorId field. Read-only.
     */
    event?: Record<string, ColorDefinition>;
    /**
     * Type of the resource ("calendar#colors").
     */
    kind?: string;
    /**
     * Last modification time of the color palette (as a RFC3339 timestamp). Read-only.
     */
    updated?: Date;
}
