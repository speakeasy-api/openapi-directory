import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required. The medium transcript objects represent.
 */
export declare enum GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum {
    MediumUnspecified = "MEDIUM_UNSPECIFIED",
    PhoneCall = "PHONE_CALL",
    Chat = "CHAT"
}
/**
 * Configuration for processing transcript objects.
 */
export declare class GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfig extends SpeakeasyBase {
    /**
     * Required. The medium transcript objects represent.
     */
    medium?: GoogleCloudContactcenterinsightsV1IngestConversationsRequestTranscriptObjectConfigMediumEnum;
}
