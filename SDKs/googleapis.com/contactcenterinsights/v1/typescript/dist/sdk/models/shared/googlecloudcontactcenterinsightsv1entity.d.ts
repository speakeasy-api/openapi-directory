import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
/**
 * The entity type.
 */
export declare enum GoogleCloudContactcenterinsightsV1EntityTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Person = "PERSON",
    Location = "LOCATION",
    Organization = "ORGANIZATION",
    Event = "EVENT",
    WorkOfArt = "WORK_OF_ART",
    ConsumerGood = "CONSUMER_GOOD",
    Other = "OTHER",
    PhoneNumber = "PHONE_NUMBER",
    Address = "ADDRESS",
    Date = "DATE",
    Number = "NUMBER",
    Price = "PRICE"
}
/**
 * The data for an entity annotation. Represents a phrase in the conversation that is a known entity, such as a person, an organization, or location.
 */
export declare class GoogleCloudContactcenterinsightsV1Entity extends SpeakeasyBase {
    /**
     * The representative name for the entity.
     */
    displayName?: string;
    /**
     * Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.
     */
    metadata?: Record<string, string>;
    /**
     * The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.
     */
    salience?: number;
    /**
     * The data for a sentiment annotation.
     */
    sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;
    /**
     * The entity type.
     */
    type?: GoogleCloudContactcenterinsightsV1EntityTypeEnum;
}
