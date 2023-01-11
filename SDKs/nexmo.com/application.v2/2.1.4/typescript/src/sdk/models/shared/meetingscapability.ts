import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum {
    Get = "GET",
    Post = "POST",
    Put = "PUT"
}


// MeetingsCapabilityWebhooksRecordingChanged
/** 
 * Vonage will send recording changed events to this URL
**/
export class MeetingsCapabilityWebhooksRecordingChanged extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: MeetingsCapabilityWebhooksRecordingChangedHttpMethodEnum;
}

export enum MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum {
    Get = "GET",
    Post = "POST",
    Put = "PUT"
}


// MeetingsCapabilityWebhooksRoomChanged
/** 
 * Vonage will send call room changed events to this URL
**/
export class MeetingsCapabilityWebhooksRoomChanged extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: MeetingsCapabilityWebhooksRoomChangedHttpMethodEnum;
}

export enum MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum {
    Get = "GET",
    Post = "POST",
    Put = "PUT"
}


// MeetingsCapabilityWebhooksSessionChanged
/** 
 * Vonage will send call session changed events to this URL
**/
export class MeetingsCapabilityWebhooksSessionChanged extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=address" })
  address?: string;

  @SpeakeasyMetadata({ data: "json, name=http_method" })
  httpMethod?: MeetingsCapabilityWebhooksSessionChangedHttpMethodEnum;
}


export class MeetingsCapabilityWebhooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=recording_changed" })
  recordingChanged?: MeetingsCapabilityWebhooksRecordingChanged;

  @SpeakeasyMetadata({ data: "json, name=room_changed" })
  roomChanged?: MeetingsCapabilityWebhooksRoomChanged;

  @SpeakeasyMetadata({ data: "json, name=session_changed" })
  sessionChanged?: MeetingsCapabilityWebhooksSessionChanged;
}


// MeetingsCapability
/** 
 * Meetings related configuration
**/
export class MeetingsCapability extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhooks" })
  webhooks?: MeetingsCapabilityWebhooks;
}
