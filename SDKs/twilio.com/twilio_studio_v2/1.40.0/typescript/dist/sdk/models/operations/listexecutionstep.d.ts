import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListExecutionStepServerList: readonly ["https://studio.twilio.com"];
export declare class ListExecutionStepSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListExecutionStepRequest extends SpeakeasyBase {
    /**
     * The SID of the Execution with the Steps to read.
     */
    executionSid: string;
    /**
     * The SID of the Flow with the Steps to read.
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
export declare class ListExecutionStepListExecutionStepResponseMeta extends SpeakeasyBase {
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
export declare class ListExecutionStepListExecutionStepResponse extends SpeakeasyBase {
    meta?: ListExecutionStepListExecutionStepResponseMeta;
    steps?: shared.StudioV2FlowExecutionExecutionStep[];
}
export declare class ListExecutionStepResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listExecutionStepResponse?: ListExecutionStepListExecutionStepResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
