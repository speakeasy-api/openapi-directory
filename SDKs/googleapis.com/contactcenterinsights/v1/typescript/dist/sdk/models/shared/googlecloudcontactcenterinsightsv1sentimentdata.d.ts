import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The data for a sentiment annotation.
 */
export declare class GoogleCloudContactcenterinsightsV1SentimentData extends SpeakeasyBase {
    /**
     * A non-negative number from 0 to infinity which represents the abolute magnitude of sentiment regardless of score.
     */
    magnitude?: number;
    /**
     * The sentiment score between -1.0 (negative) and 1.0 (positive).
     */
    score?: number;
}
