import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The type of impression event.
 */
export declare enum GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum {
    ImpressionTypeUnspecified = "IMPRESSION_TYPE_UNSPECIFIED",
    Presented = "PRESENTED",
    Interacted = "INTERACTED"
}
/**
 * Encapsulates impression event details.
 */
export declare class GoogleMapsPlayablelocationsV3Impression extends SpeakeasyBase {
    /**
     * An arbitrary, developer-defined type identifier for each type of game object used in your game. Since players interact with differ types of game objects in different ways, this field allows you to segregate impression data by type for analysis. You should assign a unique `game_object_type` ID to represent a distinct type of game object in your game. For example, 1=monster location, 2=powerup location.
     */
    gameObjectType?: number;
    /**
     * Required. The type of impression event.
     */
    impressionType?: GoogleMapsPlayablelocationsV3ImpressionImpressionTypeEnum;
    /**
     * Required. The name of the playable location.
     */
    locationName?: string;
}
