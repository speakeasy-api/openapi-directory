import { SpeakeasyBase } from "../../../internal/utils";
import { Dimension } from "./dimension";
/**
 * This message carries publisher provided forecasting information.
 */
export declare class PublisherProvidedForecast extends SpeakeasyBase {
    /**
     * Publisher provided dimensions. E.g. geo, sizes etc...
     */
    dimensions?: Dimension[];
    /**
     * Publisher provided weekly impressions.
     */
    weeklyImpressions?: string;
    /**
     * Publisher provided weekly uniques.
     */
    weeklyUniques?: string;
}
