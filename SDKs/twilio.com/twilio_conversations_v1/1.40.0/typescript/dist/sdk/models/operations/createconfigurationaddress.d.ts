import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateConfigurationAddressServerList: readonly ["https://conversations.twilio.com"];
export declare class CreateConfigurationAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateConfigurationAddressCreateConfigurationAddressRequest extends SpeakeasyBase {
    /**
     * The unique address to be configured. The address can be a whatsapp address or phone number
     */
    address: string;
    /**
     * Conversation Service for the auto-created conversation. If not set, the conversation is created in the default service.
     */
    autoCreationConversationServiceSid?: string;
    /**
     * Enable/Disable auto-creating conversations for messages to this address
     */
    autoCreationEnabled?: boolean;
    /**
     * For type `studio`, the studio flow SID where the webhook should be sent to.
     */
    autoCreationStudioFlowSid?: string;
    /**
     * For type `studio`, number of times to retry the webhook request
     */
    autoCreationStudioRetryCount?: number;
    autoCreationType?: shared.ConfigurationAddressEnumAutoCreationTypeEnum;
    /**
     * The list of events, firing webhook event for this Conversation. Values can be any of the following: `onMessageAdded`, `onMessageUpdated`, `onMessageRemoved`, `onConversationUpdated`, `onConversationStateUpdated`, `onConversationRemoved`, `onParticipantAdded`, `onParticipantUpdated`, `onParticipantRemoved`, `onDeliveryUpdated`
     */
    autoCreationWebhookFilters?: string[];
    autoCreationWebhookMethod?: shared.ConfigurationAddressEnumMethodEnum;
    /**
     * For type `webhook`, the url for the webhook request.
     */
    autoCreationWebhookUrl?: string;
    /**
     * The human-readable name of this configuration, limited to 256 characters. Optional.
     */
    friendlyName?: string;
    type: shared.ConfigurationAddressEnumTypeEnum;
}
export declare class CreateConfigurationAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    conversationsV1ConfigurationAddress?: shared.ConversationsV1ConfigurationAddress;
}
