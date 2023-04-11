import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
/**
 * The type of the entity mention.
 */
export declare enum GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum {
    MentionTypeUnspecified = "MENTION_TYPE_UNSPECIFIED",
    Proper = "PROPER",
    Common = "COMMON"
}
/**
 * The data for an entity mention annotation. This represents a mention of an `Entity` in the conversation.
 */
export declare class GoogleCloudContactcenterinsightsV1EntityMentionData extends SpeakeasyBase {
    /**
     * The key of this entity in conversation entities. Can be used to retrieve the exact `Entity` this mention is attached to.
     */
    entityUniqueId?: string;
    /**
     * The data for a sentiment annotation.
     */
    sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;
    /**
     * The type of the entity mention.
     */
    type?: GoogleCloudContactcenterinsightsV1EntityMentionDataTypeEnum;
}
