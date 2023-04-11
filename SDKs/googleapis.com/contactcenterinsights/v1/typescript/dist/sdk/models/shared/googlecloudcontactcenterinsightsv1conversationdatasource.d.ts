import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudContactcenterinsightsV1DialogflowSource, GoogleCloudContactcenterinsightsV1DialogflowSourceInput } from "./googlecloudcontactcenterinsightsv1dialogflowsource";
import { GoogleCloudContactcenterinsightsV1GcsSource } from "./googlecloudcontactcenterinsightsv1gcssource";
/**
 * The conversation source, which is a combination of transcript and audio.
 */
export declare class GoogleCloudContactcenterinsightsV1ConversationDataSource extends SpeakeasyBase {
    /**
     * A Dialogflow source of conversation data.
     */
    dialogflowSource?: GoogleCloudContactcenterinsightsV1DialogflowSource;
    /**
     * A Cloud Storage source of conversation data.
     */
    gcsSource?: GoogleCloudContactcenterinsightsV1GcsSource;
}
/**
 * The conversation source, which is a combination of transcript and audio.
 */
export declare class GoogleCloudContactcenterinsightsV1ConversationDataSourceInput extends SpeakeasyBase {
    /**
     * A Dialogflow source of conversation data.
     */
    dialogflowSource?: GoogleCloudContactcenterinsightsV1DialogflowSourceInput;
    /**
     * A Cloud Storage source of conversation data.
     */
    gcsSource?: GoogleCloudContactcenterinsightsV1GcsSource;
}
