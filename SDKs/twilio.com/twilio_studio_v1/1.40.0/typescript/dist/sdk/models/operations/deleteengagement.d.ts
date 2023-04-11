import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteEngagementServerList: readonly ["https://studio.twilio.com"];
export declare class DeleteEngagementSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteEngagementRequest extends SpeakeasyBase {
    /**
     * The SID of the Flow to delete Engagements from.
     */
    flowSid: string;
    /**
     * The SID of the Engagement resource to delete.
     */
    sid: string;
}
export declare class DeleteEngagementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
