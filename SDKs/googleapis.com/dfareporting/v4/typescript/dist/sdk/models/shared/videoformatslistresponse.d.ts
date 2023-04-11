import { SpeakeasyBase } from "../../../internal/utils";
import { VideoFormat } from "./videoformat";
/**
 * Video Format List Response
 */
export declare class VideoFormatsListResponse extends SpeakeasyBase {
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#videoFormatsListResponse".
     */
    kind?: string;
    /**
     * Video format collection.
     */
    videoFormats?: VideoFormat[];
}
