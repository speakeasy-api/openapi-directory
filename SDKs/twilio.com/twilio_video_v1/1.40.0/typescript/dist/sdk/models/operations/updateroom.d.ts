import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRoomServerList: readonly ["https://video.twilio.com"];
export declare class UpdateRoomSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRoomUpdateRoomRequest extends SpeakeasyBase {
    status: shared.RoomEnumRoomStatusEnum;
}
export declare class UpdateRoomRequest extends SpeakeasyBase {
    requestBody?: UpdateRoomUpdateRoomRequest;
    /**
     * The SID of the Room resource to update.
     */
    sid: string;
}
export declare class UpdateRoomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1Room?: shared.VideoV1Room;
}
