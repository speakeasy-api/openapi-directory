import { SpeakeasyBase } from "../../../internal/utils";
import { Classification } from "./classification";
import { ExternalLink } from "./externallink";
import { Image } from "./image";
/**
 * Type of the entity
 */
export declare enum AttractionTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Attraction
 */
export declare class Attraction extends SpeakeasyBase {
    /**
     * Additional information of the entity
     */
    additionalInfo?: string;
    /**
     * Attraction's classifications
     */
    classifications?: Classification[];
    /**
     * Description's of the entity
     */
    description?: string;
    /**
     * List of external links
     */
    externalLinks?: Record<string, ExternalLink[]>;
    /**
     * Unique id of the entity in the discovery API
     */
    id: string;
    /**
     * Images of the entity
     */
    images?: Image[];
    /**
     * Locale in which the content is returned
     */
    locale?: string;
    /**
     * Name of the entity
     */
    name?: string;
    /**
     * Indicate if this is a test entity, by default test entities won't appear in discovery API
     */
    test?: boolean;
    /**
     * Type of the entity
     */
    type: AttractionTypeEnum;
    /**
     * number of upcoming events
     */
    upcomingEvents?: Record<string, number>;
    /**
     * URL of a web site detail page of the entity
     */
    url?: string;
}
