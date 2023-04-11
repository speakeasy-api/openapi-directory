import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchStepContextServerList: readonly ["https://studio.twilio.com"];
export declare class FetchStepContextSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchStepContextRequest extends SpeakeasyBase {
    /**
     * The SID of the Engagement with the Step to fetch.
     */
    engagementSid: string;
    /**
     * The SID of the Flow with the Step to fetch.
     */
    flowSid: string;
    /**
     * The SID of the Step to fetch
     */
    stepSid: string;
}
export declare class FetchStepContextResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV1FlowEngagementStepStepContext?: shared.StudioV1FlowEngagementStepStepContext;
}
