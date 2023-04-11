import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
/**
 * One channel of conversation-level sentiment data.
 */
export declare class GoogleCloudContactcenterinsightsV1ConversationLevelSentiment extends SpeakeasyBase {
    /**
     * The channel of the audio that the data applies to.
     */
    channelTag?: number;
    /**
     * The data for a sentiment annotation.
     */
    sentimentData?: GoogleCloudContactcenterinsightsV1SentimentData;
}
