import { SpeakeasyBase } from "../../../internal/utils";
import { ApplicationCategory } from "./applicationcategory";
import { ImageAsset } from "./imageasset";
import { Instance } from "./instance";
export declare enum ApplicationEnabledFeaturesEnum {
    ApplicationFeatureUnspecified = "APPLICATION_FEATURE_UNSPECIFIED",
    Snapshots = "SNAPSHOTS"
}
/**
 * The Application resource.
 */
export declare class Application extends SpeakeasyBase {
    /**
     * The number of achievements visible to the currently authenticated player.
     */
    achievementCount?: number;
    /**
     * The assets of the application.
     */
    assets?: ImageAsset[];
    /**
     * The author of the application.
     */
    author?: string;
    /**
     * An application category object.
     */
    category?: ApplicationCategory;
    /**
     * The description of the application.
     */
    description?: string;
    /**
     * A list of features that have been enabled for the application.
     */
    enabledFeatures?: ApplicationEnabledFeaturesEnum[];
    /**
     * The ID of the application.
     */
    id?: string;
    /**
     * The instances of the application.
     */
    instances?: Instance[];
    /**
     * Uniquely identifies the type of this resource. Value is always the fixed string `games#application`.
     */
    kind?: string;
    /**
     * The last updated timestamp of the application.
     */
    lastUpdatedTimestamp?: string;
    /**
     * The number of leaderboards visible to the currently authenticated player.
     */
    leaderboardCount?: number;
    /**
     * The name of the application.
     */
    name?: string;
    /**
     * A hint to the client UI for what color to use as an app-themed color. The color is given as an RGB triplet (e.g. "E0E0E0").
     */
    themeColor?: string;
}
