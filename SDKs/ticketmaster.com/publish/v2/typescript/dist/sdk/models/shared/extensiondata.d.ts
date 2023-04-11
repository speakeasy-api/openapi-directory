import { SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";
/**
 * The type of the entity to add this extensions to
 */
export declare enum ExtensionDataRelatedEntityTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * This class defines an extenstion data on the Publish API
 */
export declare class ExtensionData extends SpeakeasyBase {
    /**
     * The actual information to add to the entity
     */
    data: Record<string, any>;
    /**
     * Id of the entity to add this extionsion to. If the relatedEntityId is Null, a relatedEntitySource MUST be provided
     */
    relatedEntityId?: string;
    /**
     * Source
     */
    relatedEntitySource?: Source;
    /**
     * The type of the entity to add this extensions to
     */
    relatedEntityType: ExtensionDataRelatedEntityTypeEnum;
    /**
     * Source of the extension, where it came from
     */
    source: string;
    /**
     * The type of the extension. This represent the data sent
     */
    type: string;
    /**
     * Version of the extensions. Version is to prevent to override an extension with an older one
     */
    versionNumber?: number;
}
