import { SpeakeasyBase } from "../../../internal/utils";
import { UsageRule } from "./usagerule";
/**
 * Configuration controlling usage of a service.
 */
export declare class Usage extends SpeakeasyBase {
    /**
     * The full resource name of a channel used for sending notifications to the service producer. Google Service Management currently only supports [Google Cloud Pub/Sub](https://cloud.google.com/pubsub) as a notification channel. To use Google Cloud Pub/Sub as the channel, this must be the name of a Cloud Pub/Sub topic that uses the Cloud Pub/Sub topic name format documented in https://cloud.google.com/pubsub/docs/overview.
     */
    producerNotificationChannel?: string;
    /**
     * Requirements that must be satisfied before a consumer project can use the service. Each requirement is of the form /; for example 'serviceusage.googleapis.com/billing-enabled'. For Google APIs, a Terms of Service requirement must be included here. Google Cloud APIs must include "serviceusage.googleapis.com/tos/cloud". Other Google APIs should include "serviceusage.googleapis.com/tos/universal". Additional ToS can be included based on the business needs.
     */
    requirements?: string[];
    /**
     * A list of usage rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules?: UsageRule[];
}
