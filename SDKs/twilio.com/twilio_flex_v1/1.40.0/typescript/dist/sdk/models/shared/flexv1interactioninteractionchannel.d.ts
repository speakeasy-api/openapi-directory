import { SpeakeasyBase } from "../../../internal/utils";
import { InteractionChannelEnumChannelStatusEnum } from "./interactionchannelenumchannelstatusenum";
import { InteractionChannelEnumTypeEnum } from "./interactionchannelenumtypeenum";
/**
 * OK
 */
export declare class FlexV1InteractionInteractionChannel extends SpeakeasyBase {
    /**
     * The Twilio error code for a failed channel.
     */
    errorCode?: number;
    /**
     * The error message for a failed channel.
     */
    errorMessage?: string;
    /**
     * The unique string created by Twilio to identify an Interaction resource, prefixed with KD.
     */
    interactionSid?: string;
    links?: Record<string, any>;
    /**
     * The unique string created by Twilio to identify an Interaction Channel resource, prefixed with UO.
     */
    sid?: string;
    status?: InteractionChannelEnumChannelStatusEnum;
    type?: InteractionChannelEnumTypeEnum;
    url?: string;
}
