import { SpeakeasyBase } from "../../../internal/utils";
import { Scene } from "./scene";
/**
 * Draft movies include a watermark. Check your plan how many draft and final movies you have
 */
export declare enum MovieDraftEnum {
    True = "true",
    False = "false"
}
export declare enum MovieQualityEnum {
    Low = "low",
    Medium = "medium",
    High = "high"
}
export declare enum MovieResolutionEnum {
    Sd = "sd",
    Hd = "hd",
    FullHd = "full-hd",
    Squared = "squared",
    InstagramStory = "instagram-story",
    InstagramFeed = "instagram-feed",
    TwitterLandscape = "twitter-landscape",
    TwitterPortrait = "twitter-portrait"
}
/**
 * Object defining the movie to be rendered
 */
export declare class Movie extends SpeakeasyBase {
    cache?: boolean;
    /**
     * Used for adding your comments
     */
    comment?: string;
    /**
     * Draft movies include a watermark. Check your plan how many draft and final movies you have
     */
    draft?: MovieDraftEnum;
    elements?: any[];
    /**
     * Frames per second
     */
    fps?: number;
    height?: number;
    quality?: MovieQualityEnum;
    resolution?: MovieResolutionEnum;
    scenes: Scene[];
    /**
     * Movie advanced settings
     */
    settings?: Record<string, any>;
    width?: number;
}
