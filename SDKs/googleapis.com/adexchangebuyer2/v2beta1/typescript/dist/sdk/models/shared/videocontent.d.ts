import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Video content for a creative.
 */
export declare class VideoContent extends SpeakeasyBase {
    /**
     * The URL to fetch a video ad.
     */
    videoUrl?: string;
    /**
     * The contents of a VAST document for a video ad. This document should conform to the VAST 2.0 or 3.0 standard.
     */
    videoVastXml?: string;
}
