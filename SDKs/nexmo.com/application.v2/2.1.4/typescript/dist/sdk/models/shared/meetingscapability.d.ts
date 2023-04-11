import { SpeakeasyBase } from "../../../internal/utils";
export declare enum MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum {
    Get = "GET",
    Post = "POST",
    Put = "PUT"
}
/**
 * Vonage will send recording changed events to this URL
 */
export declare class MeetingsCapabilityWebhooksRecordingChanged extends SpeakeasyBase {
    address?: string;
    httpMethod?: MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum;
}
export declare enum MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum {
    Get = "GET",
    Post = "POST",
    Put = "PUT"
}
/**
 * Vonage will send call room changed events to this URL
 */
export declare class MeetingsCapabilityWebhooksRoomChanged extends SpeakeasyBase {
    address?: string;
    httpMethod?: MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum;
}
export declare enum MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum {
    Get = "GET",
    Post = "POST",
    Put = "PUT"
}
/**
 * Vonage will send call session changed events to this URL
 */
export declare class MeetingsCapabilityWebhooksSessionChanged extends SpeakeasyBase {
    address?: string;
    httpMethod?: MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum;
}
export declare class MeetingsCapabilityWebhooks extends SpeakeasyBase {
    /**
     * Vonage will send recording changed events to this URL
     */
    recordingChanged?: MeetingsCapabilityWebhooksRecordingChanged;
    /**
     * Vonage will send call room changed events to this URL
     */
    roomChanged?: MeetingsCapabilityWebhooksRoomChanged;
    /**
     * Vonage will send call session changed events to this URL
     */
    sessionChanged?: MeetingsCapabilityWebhooksSessionChanged;
}
/**
 * Meetings related configuration
 */
export declare class MeetingsCapability extends SpeakeasyBase {
    webhooks?: MeetingsCapabilityWebhooks;
}
