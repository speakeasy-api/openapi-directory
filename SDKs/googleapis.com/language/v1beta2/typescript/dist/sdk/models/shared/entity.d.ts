import { SpeakeasyBase } from "../../../internal/utils";
import { EntityMention } from "./entitymention";
import { Sentiment } from "./sentiment";
/**
 * The entity type.
 */
export declare enum EntityTypeEnum {
    Unknown = "UNKNOWN",
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
 * Represents a phrase in the text that is a known entity, such as a person, an organization, or location. The API associates information, such as salience and mentions, with entities.
 */
export declare class Entity extends SpeakeasyBase {
    /**
     * The mentions of this entity in the input document. The API currently supports proper noun mentions.
     */
    mentions?: EntityMention[];
    /**
     * Metadata associated with the entity. For most entity types, the metadata is a Wikipedia URL (`wikipedia_url`) and Knowledge Graph MID (`mid`), if they are available. For the metadata associated with other entity types, see the Type table below.
     */
    metadata?: Record<string, string>;
    /**
     * The representative name for the entity.
     */
    name?: string;
    /**
     * The salience score associated with the entity in the [0, 1.0] range. The salience score for an entity provides information about the importance or centrality of that entity to the entire document text. Scores closer to 0 are less salient, while scores closer to 1.0 are highly salient.
     */
    salience?: number;
    /**
     * Represents the feeling associated with the entire text or entities in the text. Next ID: 6
     */
    sentiment?: Sentiment;
    /**
     * The entity type.
     */
    type?: EntityTypeEnum;
}
