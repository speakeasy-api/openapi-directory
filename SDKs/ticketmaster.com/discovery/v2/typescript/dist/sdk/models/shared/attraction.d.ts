import { SpeakeasyBase } from "../../../internal/utils";
import { Classification } from "./classification";
import { ExternalLink } from "./externallink";
import { Image } from "./image";
export declare enum AttractionTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Attraction
**/
export declare class Attraction extends SpeakeasyBase {
    additionalInfo?: string;
    classifications?: Classification[];
    description?: string;
    externalLinks?: Record<string, ExternalLink[]>;
    id: string;
    images?: Image[];
    locale?: string;
    name?: string;
    test?: boolean;
    type: AttractionTypeEnum;
    upcomingEvents?: Record<string, number>;
    url?: string;
}
