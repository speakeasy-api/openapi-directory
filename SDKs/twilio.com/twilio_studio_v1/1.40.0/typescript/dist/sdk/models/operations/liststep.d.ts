import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListStepServerList: readonly ["https://studio.twilio.com"];
export declare class ListStepSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListStepRequest extends SpeakeasyBase {
    /**
     * The SID of the Engagement with the Step to read.
     */
    engagementSid: string;
    /**
     * The SID of the Flow with the Step to read.
     */
    flowSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListStepListStepResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListStepListStepResponse extends SpeakeasyBase {
    meta?: ListStepListStepResponseMeta;
    steps?: shared.StudioV1FlowEngagementStep[];
}
export declare class ListStepResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listStepResponse?: ListStepListStepResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
