import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Successful response
 */
export declare class EnterprisesSendTestPushNotificationResponse extends SpeakeasyBase {
    /**
     * The message ID of the test push notification that was sent.
     */
    messageId?: string;
    /**
     * The name of the Cloud Pub/Sub topic to which notifications for this enterprise's enrolled account will be sent.
     */
    topicName?: string;
}
