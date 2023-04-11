import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The SfdcChannel that points to a CDC or Platform Event Channel.
 */
export declare class GoogleCloudIntegrationsV1alphaSfdcChannelInput extends SpeakeasyBase {
    /**
     * The Channel topic defined by salesforce once an channel is opened
     */
    channelTopic?: string;
    /**
     * The description for this channel
     */
    description?: string;
    /**
     * Client level unique name/alias to easily reference a channel.
     */
    displayName?: string;
    /**
     * Indicated if a channel has any active integrations referencing it. Set to false when the channel is created, and set to true if there is any integration published with the channel configured in it.
     */
    isActive?: boolean;
    /**
     * Last sfdc messsage replay id for channel
     */
    lastReplayId?: string;
    /**
     * Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.
     */
    name?: string;
}
/**
 * The SfdcChannel that points to a CDC or Platform Event Channel.
 */
export declare class GoogleCloudIntegrationsV1alphaSfdcChannel extends SpeakeasyBase {
    /**
     * The Channel topic defined by salesforce once an channel is opened
     */
    channelTopic?: string;
    /**
     * Output only. Time when the channel is created
     */
    createTime?: string;
    /**
     * Output only. Time when the channel was deleted. Empty if not deleted.
     */
    deleteTime?: string;
    /**
     * The description for this channel
     */
    description?: string;
    /**
     * Client level unique name/alias to easily reference a channel.
     */
    displayName?: string;
    /**
     * Indicated if a channel has any active integrations referencing it. Set to false when the channel is created, and set to true if there is any integration published with the channel configured in it.
     */
    isActive?: boolean;
    /**
     * Last sfdc messsage replay id for channel
     */
    lastReplayId?: string;
    /**
     * Resource name of the SFDC channel projects/{project}/locations/{location}/sfdcInstances/{sfdc_instance}/sfdcChannels/{sfdc_channel}.
     */
    name?: string;
    /**
     * Output only. Time when the channel was last updated
     */
    updateTime?: string;
}
