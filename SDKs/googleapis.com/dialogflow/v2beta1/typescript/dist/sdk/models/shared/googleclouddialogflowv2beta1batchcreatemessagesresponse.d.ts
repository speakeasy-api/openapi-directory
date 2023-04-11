import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowV2beta1Message } from "./googleclouddialogflowv2beta1message";
/**
 * The request message for Conversations.BatchCreateMessagesResponse.
 */
export declare class GoogleCloudDialogflowV2beta1BatchCreateMessagesResponse extends SpeakeasyBase {
    /**
     * Messages created.
     */
    messages?: GoogleCloudDialogflowV2beta1Message[];
}
