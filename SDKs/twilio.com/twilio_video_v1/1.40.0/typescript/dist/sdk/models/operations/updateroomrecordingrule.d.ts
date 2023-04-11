import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const UpdateRoomRecordingRuleServerList: readonly ["https://video.twilio.com"];
export declare class UpdateRoomRecordingRuleSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest extends SpeakeasyBase {
    /**
     * A JSON-encoded array of recording rules.
     */
    rules?: any;
}
export declare class UpdateRoomRecordingRuleRequest extends SpeakeasyBase {
    requestBody?: UpdateRoomRecordingRuleUpdateRoomRecordingRuleRequest;
    /**
     * The SID of the Room resource where the recording rules to update apply.
     */
    roomSid: string;
}
export declare class UpdateRoomRecordingRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Accepted
     */
    videoV1RoomRoomRecordingRule?: shared.VideoV1RoomRoomRecordingRule;
}
