import { SpeakeasyBase } from "../../../internal/utils";
import { CloudPubsubTopic } from "./cloudpubsubtopic";
import { Feed } from "./feed";
/**
 * An instruction to Classroom to send notifications from the `feed` to the provided destination.
 */
export declare class Registration extends SpeakeasyBase {
    /**
     * A reference to a Cloud Pub/Sub topic. To register for notifications, the owner of the topic must grant `classroom-notifications@system.gserviceaccount.com` the `projects.topics.publish` permission.
     */
    cloudPubsubTopic?: CloudPubsubTopic;
    /**
     * The time until which the `Registration` is effective. This is a read-only field assigned by the server.
     */
    expiryTime?: string;
    /**
     * A class of notifications that an application can register to receive. For example: "all roster changes for a domain".
     */
    feed?: Feed;
    /**
     * A server-generated unique identifier for this `Registration`. Read-only.
     */
    registrationId?: string;
}
