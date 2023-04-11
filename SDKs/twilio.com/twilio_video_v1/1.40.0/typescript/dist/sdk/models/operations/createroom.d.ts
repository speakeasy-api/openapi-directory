import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateRoomServerList: readonly ["https://video.twilio.com"];
export declare class CreateRoomSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
/**
 * The HTTP method we should use to call `status_callback`. Can be `POST` or `GET`.
 */
export declare enum CreateRoomCreateRoomRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}
export declare class CreateRoomCreateRoomRequest extends SpeakeasyBase {
    /**
     * When set to true, indicates that the participants in the room will only publish audio. No video tracks will be allowed. Group rooms only.
     */
    audioOnly?: boolean;
    /**
     * Configures how long (in minutes) a room will remain active after last participant leaves. Valid values range from 1 to 60 minutes (no fractions).
     */
    emptyRoomTimeout?: number;
    /**
     * Deprecated, now always considered to be true.
     */
    enableTurn?: boolean;
    /**
     * When set to true, indicated that this is the large room.
     */
    largeRoom?: boolean;
    /**
     * The maximum number of seconds a Participant can be connected to the room. The maximum possible value is 86400 seconds (24 hours). The default is 14400 seconds (4 hours).
     */
    maxParticipantDuration?: number;
    /**
     * The maximum number of concurrent Participants allowed in the room. Peer-to-peer rooms can have up to 10 Participants. Small Group rooms can have up to 4 Participants. Group rooms can have up to 50 Participants.
     */
    maxParticipants?: number;
    /**
     * The region for the media server in Group Rooms.  Can be: one of the [available Media Regions](https://www.twilio.com/docs/video/ip-address-whitelisting#group-rooms-media-servers). ***This feature is not available in `peer-to-peer` rooms.***
     */
    mediaRegion?: string;
    /**
     * Whether to start recording when Participants connect. ***This feature is not available in `peer-to-peer` rooms.***
     */
    recordParticipantsOnConnect?: boolean;
    /**
     * A collection of Recording Rules that describe how to include or exclude matching tracks for recording
     */
    recordingRules?: any;
    /**
     * The URL we should call using the `status_callback_method` to send status information to your application on every room event. See [Status Callbacks](https://www.twilio.com/docs/video/api/status-callbacks) for more info.
     */
    statusCallback?: string;
    /**
     * The HTTP method we should use to call `status_callback`. Can be `POST` or `GET`.
     */
    statusCallbackMethod?: CreateRoomCreateRoomRequestStatusCallbackMethodEnum;
    type?: shared.RoomEnumRoomTypeEnum;
    /**
     * An application-defined string that uniquely identifies the resource. It can be used as a `room_sid` in place of the resource's `sid` in the URL to address the resource, assuming it does not contain any [reserved characters](https://tools.ietf.org/html/rfc3986#section-2.2) that would need to be URL encoded. This value is unique for `in-progress` rooms. SDK clients can use this name to connect to the room. REST API clients can use this name in place of the Room SID to interact with the room as long as the room is `in-progress`.
     */
    uniqueName?: string;
    /**
     * Configures how long (in minutes) a room will remain active if no one joins. Valid values range from 1 to 60 minutes (no fractions).
     */
    unusedRoomTimeout?: number;
    /**
     * An array of the video codecs that are supported when publishing a track in the room.  Can be: `VP8` and `H264`.  ***This feature is not available in `peer-to-peer` rooms***
     */
    videoCodecs?: shared.RoomEnumVideoCodecEnum[];
}
export declare class CreateRoomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    videoV1Room?: shared.VideoV1Room;
}
