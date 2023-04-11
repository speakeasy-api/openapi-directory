import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchRoomRecordingRuleServerList: readonly ["https://video.twilio.com"];
export declare class FetchRoomRecordingRuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchRoomRecordingRuleRequest extends SpeakeasyBase {
    /**
     * The SID of the Room resource where the recording rules to fetch apply.
     */
    roomSid: string;
}
export declare class FetchRoomRecordingRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    videoV1RoomRoomRecordingRule?: shared.VideoV1RoomRoomRecordingRule;
}
