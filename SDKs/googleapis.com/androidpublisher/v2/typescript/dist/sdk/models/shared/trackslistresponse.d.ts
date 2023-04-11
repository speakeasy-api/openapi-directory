import { SpeakeasyBase } from "../../../internal/utils";
import { Track } from "./track";
/**
 * Successful response
 */
export declare class TracksListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "androidpublisher#tracksListResponse".
     */
    kind?: string;
    tracks?: Track[];
}
