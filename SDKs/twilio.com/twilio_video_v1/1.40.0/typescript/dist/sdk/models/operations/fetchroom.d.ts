import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRoomServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRoomRequest extends SpeakeasyBase {
    /**
     * The SID of the Room resource to fetch.
     */
    sid: string;
}
export declare class FetchRoomResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1Room?: shared.VideoV1Room;
}
