import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchStepServerList: readonly ["https://studio.twilio.com"];
export declare class FetchStepSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchStepRequest extends SpeakeasyBase {
    /**
     * The SID of the Engagement with the Step to fetch.
     */
    engagementSid: string;
    /**
     * The SID of the Flow with the Step to fetch.
     */
    flowSid: string;
    /**
     * The SID of the Step resource to fetch.
     */
    sid: string;
}
export declare class FetchStepResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    studioV1FlowEngagementStep?: shared.StudioV1FlowEngagementStep;
}
