import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListRecordingAddOnResultPayloadServerList: readonly ["https://api.twilio.com"];
export declare class ListRecordingAddOnResultPayloadSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListRecordingAddOnResultPayloadRequest extends SpeakeasyBase {
    /**
     * The SID of the [Account](https://www.twilio.com/docs/iam/api/account) that created the Recording AddOnResult Payload resources to read.
     */
    accountSid: string;
    /**
     * The SID of the AddOnResult to which the payloads to read belongs.
     */
    addOnResultSid: string;
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
     * The SID of the recording to which the AddOnResult resource that contains the payloads to read belongs.
     */
    referenceSid: string;
}
/**
 * OK
 */
export declare class ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
    end?: number;
    firstPageUri?: string;
    nextPageUri?: string;
    page?: number;
    pageSize?: number;
    payloads?: shared.ApiV2010AccountRecordingRecordingAddOnResultRecordingAddOnResultPayload[];
    previousPageUri?: string;
    start?: number;
    uri?: string;
}
export declare class ListRecordingAddOnResultPayloadResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listRecordingAddOnResultPayloadResponse?: ListRecordingAddOnResultPayloadListRecordingAddOnResultPayloadResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
