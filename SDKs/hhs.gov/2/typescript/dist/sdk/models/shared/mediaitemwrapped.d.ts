import { SpeakeasyBase } from "../../../internal/utils";
import { MediaItem } from "./mediaitem";
import { Meta } from "./meta";
/**
 * Returns the list of MediaItems for the Campaign identified by the 'id'.
 */
export declare class MediaItemWrapped extends SpeakeasyBase {
    callback?: string;
    meta?: Meta;
    results?: MediaItem[];
}
