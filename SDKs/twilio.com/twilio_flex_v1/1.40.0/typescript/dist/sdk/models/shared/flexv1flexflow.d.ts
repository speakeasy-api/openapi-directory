import { SpeakeasyBase } from "../../../internal/utils";
import { FlexFlowEnumChannelTypeEnum } from "./flexflowenumchanneltypeenum";
import { FlexFlowEnumIntegrationTypeEnum } from "./flexflowenumintegrationtypeenum";
/**
 * Created
 */
export declare class FlexV1FlexFlow extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Flex Flow resource and owns this Workflow.
     */
    accountSid?: string;
    channelType?: FlexFlowEnumChannelTypeEnum;
    /**
     * The SID of the chat service.
     */
    chatServiceSid?: string;
    /**
     * The channel contact's Identity.
     */
    contactIdentity?: string;
    /**
     * The date and time in GMT when the resource was created specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateCreated?: Date;
    /**
     * The date and time in GMT when the resource was last updated specified in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format.
     */
    dateUpdated?: Date;
    /**
     * Whether the Flex Flow is enabled.
     */
    enabled?: boolean;
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
    /**
     * An object that contains specific parameters for the integration.
     */
    integration?: any;
    integrationType?: FlexFlowEnumIntegrationTypeEnum;
    /**
     * When enabled, the Messaging Channel Janitor will remove active Proxy sessions if the associated Task is deleted outside of the Flex UI. Defaults to `false`.
     */
    janitorEnabled?: boolean;
    /**
     * When enabled, Flex will keep the chat channel active so that it may be used for subsequent interactions with a contact identity. Defaults to `false`.
     */
    longLived?: boolean;
    /**
     * The unique string that we created to identify the Flex Flow resource.
     */
    sid?: string;
    /**
     * The absolute URL of the Flex Flow resource.
     */
    url?: string;
}
