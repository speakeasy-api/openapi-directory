import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1SentimentData } from "./googlecloudcontactcenterinsightsv1sentimentdata";
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
export declare class GoogleCloudContactcenterinsightsV1Entity extends SpeakeasyBase {
    displayName?: string;
    metadata?: Record<string, string>;
    salience?: number;
    sentiment?: GoogleCloudContactcenterinsightsV1SentimentData;
    type?: GoogleCloudContactcenterinsightsV1EntityTypeEnum;
}
