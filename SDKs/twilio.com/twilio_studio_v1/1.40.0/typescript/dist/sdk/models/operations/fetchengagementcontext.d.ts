import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchEngagementContextServerList: readonly ["https://studio.twilio.com"];
export declare class FetchEngagementContextSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchEngagementContextRequest extends SpeakeasyBase {
    /**
     * The SID of the Engagement.
     */
    engagementSid: string;
    /**
     * The SID of the Flow.
     */
    flowSid: string;
}
export declare class FetchEngagementContextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV1FlowEngagementEngagementContext?: shared.StudioV1FlowEngagementEngagementContext;
}
