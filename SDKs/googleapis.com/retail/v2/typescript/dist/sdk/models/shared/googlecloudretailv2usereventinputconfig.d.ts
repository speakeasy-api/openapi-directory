import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRetailV2BigQuerySource } from "./googlecloudretailv2bigquerysource";
import { GoogleCloudRetailV2GcsSource } from "./googlecloudretailv2gcssource";
import { GoogleCloudRetailV2UserEventInlineSourceInput } from "./googlecloudretailv2usereventinlinesource";
/**
 * The input config source for user events.
 */
export declare class GoogleCloudRetailV2UserEventInputConfigInput extends SpeakeasyBase {
    /**
     * BigQuery source import data from.
     */
    bigQuerySource?: GoogleCloudRetailV2BigQuerySource;
    /**
     * Google Cloud Storage location for input content.
     */
    gcsSource?: GoogleCloudRetailV2GcsSource;
    /**
     * The inline source for the input config for ImportUserEvents method.
     */
    userEventInlineSource?: GoogleCloudRetailV2UserEventInlineSourceInput;
}
