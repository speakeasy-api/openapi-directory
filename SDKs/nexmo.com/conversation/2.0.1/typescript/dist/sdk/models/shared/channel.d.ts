import { SpeakeasyBase } from "../../../internal/utils";
import { ChannelTypeEnum } from "./channeltypeenum";
/**
 * Connect to a VBC extension
 */
export declare class ChannelFrom5 extends SpeakeasyBase {
    extension: string;
    /**
     * The type of connection. Must be `vbc`
     */
    type: string;
}
export declare enum ChannelFrom4ContentTypeEnum {
    AudioL16RateEqual8000 = "audio/l16;rate=8000",
    AudioL16RateEqual16000 = "audio/l16;rate=16000"
}
/**
 * Details of the Websocket you want to connect to
 */
export declare class ChannelFrom4Headers extends SpeakeasyBase {
    /**
     * This is an example header. You can provide any headers you may need
     */
    customerId?: string;
}
/**
 * Connect to a Websocket
 */
export declare class ChannelFrom4 extends SpeakeasyBase {
    contentType: ChannelFrom4ContentTypeEnum;
    /**
     * Details of the Websocket you want to connect to
     */
    headers?: ChannelFrom4Headers;
    /**
     * The type of connection. Must be `websocket`
     */
    type: string;
    uri?: string;
}
/**
 * Connect to a SIP Endpoint
 */
export declare class ChannelFrom3 extends SpeakeasyBase {
    /**
     * The type of connection. Must be `sip`
     */
    type: string;
    /**
     * The SIP URI to connect to
     */
    uri?: string;
}
/**
 * Connect to a Phone (PSTN) number
 */
export declare class ChannelFrom2 extends SpeakeasyBase {
    /**
     * The phone number to connect to
     */
    number: string;
    /**
     * The type of connection. Must be `phone`
     */
    type: string;
}
/**
 * Connect to an App User
 */
export declare class ChannelFrom1 extends SpeakeasyBase {
    /**
     * The type of connection. Must be `app`
     */
    type: string;
    /**
     * The username to connect to
     */
    user: string;
}
export declare class ChannelLegIds extends SpeakeasyBase {
    /**
     * The id of the leg. rtc_id and call_id are leg id
     */
    legId?: string;
}
/**
 * Connect to a Phone (PSTN) number
 */
export declare class ChannelTo2 extends SpeakeasyBase {
    /**
     * Provide [DTMF digits](https://developer.nexmo.com/voice/voice-api/guides/dtmf) to send when the call is answered
     */
    dtmfAnswer?: string;
    /**
     * The phone number to connect to
     */
    number: string;
    /**
     * The type of connection. Must be `phone`
     */
    type: string;
}
/**
 * A user who joins a conversation as a member can have one channel per membership type. Channels can be `app`, `phone`, `sip`, `websocket`, or `vbc`
 */
export declare class Channel extends SpeakeasyBase {
    from?: any;
    /**
     * The id of the leg. rtc_id and call_id are leg id
     */
    legId?: string;
    /**
     * Leg ids associated with this Channel. The first item in the array represents the main active Leg. The second item, if exists, represents a screen-share Leg.
     */
    legIds?: ChannelLegIds[];
    to?: any;
    /**
     * Channel type
     */
    type?: ChannelTypeEnum;
}
