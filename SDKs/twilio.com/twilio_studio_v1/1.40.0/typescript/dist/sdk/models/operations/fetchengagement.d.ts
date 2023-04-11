import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchEngagementServerList: readonly ["https://studio.twilio.com"];
export declare class FetchEngagementSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchEngagementRequest extends SpeakeasyBase {
    /**
     * The SID of the Flow.
     */
    flowSid: string;
    /**
     * The SID of the Engagement resource to fetch.
     */
    sid: string;
}
export declare class FetchEngagementResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV1FlowEngagement?: shared.StudioV1FlowEngagement;
}
