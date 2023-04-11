import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateFlexFlowServerList: readonly ["https://flex-api.twilio.com"];
export declare class CreateFlexFlowSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateFlexFlowCreateFlexFlowRequest extends SpeakeasyBase {
    channelType: shared.FlexFlowEnumChannelTypeEnum;
    /**
     * The SID of the chat service.
     */
    chatServiceSid: string;
    /**
     * The channel contact's Identity.
     */
    contactIdentity?: string;
    /**
     * Whether the new Flex Flow is enabled.
     */
    enabled?: boolean;
    /**
     * A descriptive string that you create to describe the Flex Flow resource.
     */
    friendlyName: string;
    /**
     * The Task Channel SID (TCXXXX) or unique name (e.g., `sms`) to use for the Task that will be created. Applicable and required when `integrationType` is `task`. The default value is `default`.
     */
    integrationChannel?: string;
    /**
     * In the context of outbound messaging, defines whether to create a Task immediately (and therefore reserve the conversation to current agent), or delay Task creation until the customer sends the first response. Set to false to create immediately, true to delay Task creation. This setting is only applicable for outbound messaging.
     */
    integrationCreationOnMessage?: boolean;
    /**
     * The SID of the Studio Flow. Required when `integrationType` is `studio`.
     */
    integrationFlowSid?: string;
    /**
     * The Task priority of a new Task. The default priority is 0. Optional when `integrationType` is `task`, not applicable otherwise.
     */
    integrationPriority?: number;
    /**
     * The number of times to retry the Studio Flow or webhook in case of failure. Takes integer values from 0 to 3 with the default being 3. Optional when `integrationType` is `studio` or `external`, not applicable otherwise.
     */
    integrationRetryCount?: number;
    /**
     * The Task timeout in seconds for a new Task. Default is 86,400 seconds (24 hours). Optional when `integrationType` is `task`, not applicable otherwise.
     */
    integrationTimeout?: number;
    /**
     * The URL of the external webhook. Required when `integrationType` is `external`.
     */
    integrationUrl?: string;
    /**
     * The Workflow SID for a new Task. Required when `integrationType` is `task`.
     */
    integrationWorkflowSid?: string;
    /**
     * The Workspace SID for a new Task. Required when `integrationType` is `task`.
     */
    integrationWorkspaceSid?: string;
    integrationType?: shared.FlexFlowEnumIntegrationTypeEnum;
    /**
     * When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the associated Task is deleted outside of the Flex UI. Defaults to `false`.
     */
    janitorEnabled?: boolean;
    /**
     * When enabled, Flex will keep the chat channel active so that it may be used for subsequent interactions with a contact identity. Defaults to `false`.
     */
    longLived?: boolean;
}
export declare class CreateFlexFlowResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    flexV1FlexFlow?: shared.FlexV1FlexFlow;
}
