import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Agent Assist frequently-asked-question answer data.
**/
export declare class GoogleCloudContactcenterinsightsV1FaqAnswerData extends SpeakeasyBase {
    answer?: string;
    confidenceScore?: number;
    metadata?: Record<string, string>;
    queryRecord?: string;
    question?: string;
    source?: string;
}
