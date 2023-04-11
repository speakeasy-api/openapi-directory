import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRecordingAddOnResultServerList: readonly ["https://api.twilio.com"];
export declare class ListRecordingAddOnResultSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRecordingAddOnResultRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult resources to read.
     */
    accountSid: string;
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
    /**
     * The SID of the recording to which the result to read belongs.
     */
    referenceSid: string;
}
/**
 * OK
 */
export declare class ListRecordingAddOnResultListRecordingAddOnResultResponse extends SpeakeasyBase {
    addOnResults?: shared.ApiV2010AccountRecordingRecordingAddOnResult[];
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListRecordingAddOnResultResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRecordingAddOnResultResponse?: ListRecordingAddOnResultListRecordingAddOnResultResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
