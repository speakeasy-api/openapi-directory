import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1CreateMessageRequestInput } from "./googleclouddialogflowv2beta1createmessagerequest";
/**
 * The request message for Conversations.BatchCreateMessagesRequest.
 */
export declare class GoogleCloudDialogflowV2beta1BatchCreateMessagesRequestInput extends SpeakeasyBase {
    /**
     * Required. A maximum of 1000 Messages can be created in a batch. CreateMessageRequest.message.send_time is required. All created messages will have identical Message.create_time.
     */
    requests?: GoogleCloudDialogflowV2beta1CreateMessageRequestInput[];
}
