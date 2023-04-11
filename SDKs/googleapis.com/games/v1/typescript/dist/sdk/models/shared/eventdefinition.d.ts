import { SpeakeasyBase } from "../../../internal/utils";
import { EventChild } from "./eventchild";
/**
 * The visibility of event being tracked in this definition.
 */
export declare enum EventDefinitionVisibilityEnum {
    EventVisibilityUnspecified = "EVENT_VISIBILITY_UNSPECIFIED",
    Revealed = "REVEALED",
    Hidden = "HIDDEN"
}
/**
 * An event definition resource.
 */
export declare class EventDefinition extends SpeakeasyBase {
    /**
     * A list of events that are a child of this event.
     */
    childEvents?: EventChild[];
    /**
     * Description of what this event represents.
     */
    description?: string;
    /**
     * The name to display for the event.
     */
    displayName?: string;
    /**
     * The ID of the event.
     */
    id?: string;
    /**
     * The base URL for the image that represents the event.
     */
    imageUrl?: string;
    /**
     * Indicates whether the icon image being returned is a default image, or is game-provided.
     */
    isDefaultImageUrl?: boolean;
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#eventDefinition`.
     */
    kind?: string;
    /**
     * The visibility of event being tracked in this definition.
     */
    visibility?: EventDefinitionVisibilityEnum;
}
