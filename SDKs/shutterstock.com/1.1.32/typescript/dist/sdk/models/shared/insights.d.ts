import { SpeakeasyBase } from "../../../internal/utils";
export declare class InsightsLabelPerformance extends SpeakeasyBase {
    name?: string;
    percentilePerformance?: number;
}
/**
 * AI-powered insights about an asset, based on the specified audience and objective
 */
export declare class Insights extends SpeakeasyBase {
    /**
     * How effective the AI thinks an asset in the category is for the specified audience and objective, expressed as a percentile compared to other images
     */
    labelPerformance: InsightsLabelPerformance[];
}
