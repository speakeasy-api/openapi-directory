import { SpeakeasyBase } from "../../../internal/utils";
import { FilteringAttribute } from "./filteringattribute";
/**
 * A representation of the event type resource.
 */
export declare class EventType extends SpeakeasyBase {
    /**
     * Output only. Human friendly description of what the event type is about. For example "Bucket created in Cloud Storage".
     */
    description?: string;
    /**
     * Output only. URI for the event schema. For example "https://github.com/googleapis/google-cloudevents/blob/master/proto/google/events/cloud/storage/v1/events.proto"
     */
    eventSchemaUri?: string;
    /**
     * Output only. Filtering attributes for the event type.
     */
    filteringAttributes?: FilteringAttribute[];
    /**
     * Output only. The full name of the event type (for example, "google.cloud.storage.object.v1.finalized"). In the form of {provider-specific-prefix}.{resource}.{version}.{verb}. Types MUST be versioned and event schemas are guaranteed to remain backward compatible within one version. Note that event type versions and API versions do not need to match.
     */
    type?: string;
}
