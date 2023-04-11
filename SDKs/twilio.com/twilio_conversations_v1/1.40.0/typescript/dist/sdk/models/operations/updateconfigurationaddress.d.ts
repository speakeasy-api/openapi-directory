import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateConfigurationAddressServerList: readonly ["https://conversations.twilio.com"];
export declare class UpdateConfigurationAddressSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateConfigurationAddressUpdateConfigurationAddressRequest extends SpeakeasyBase {
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
}
export declare class UpdateConfigurationAddressRequest extends SpeakeasyBase {
    requestBody?: UpdateConfigurationAddressUpdateConfigurationAddressRequest;
    /**
     * The SID of the Address Configuration resource. This value can be either the `sid` or the `address` of the configuration
     */
    sid: string;
}
export declare class UpdateConfigurationAddressResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    conversationsV1ConfigurationAddress?: shared.ConversationsV1ConfigurationAddress;
}
