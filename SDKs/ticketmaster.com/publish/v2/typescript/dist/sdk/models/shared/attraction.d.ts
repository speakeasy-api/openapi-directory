import { SpeakeasyBase } from "../../../internal/utils";
import { Classification } from "./classification";
import { Image } from "./image";
import { Source } from "./source";
export declare enum AttractionTypeEnum {
    Event = "event",
    Venue = "venue",
    Attraction = "attraction"
}
/**
 * Attraction
**/
export declare class Attraction extends SpeakeasyBase {
    active?: boolean;
    additionalInfos?: Record<string, string>;
    classifications?: Classification[];
    descriptions?: Record<string, string>;
    discoverable?: boolean;
    images?: Image[];
    names?: Record<string, string>;
    references?: Record<string, string>;
    relationships?: Record<string, any>[];
    source?: Source;
    test?: boolean;
    type: AttractionTypeEnum;
    url?: string;
    version?: number;
}
