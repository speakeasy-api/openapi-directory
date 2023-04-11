import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchApprovalFetchServerList: readonly ["https://content.twilio.com"];
export declare class FetchApprovalFetchSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchApprovalFetchRequest extends SpeakeasyBase {
    /**
     * The Twilio-provided string that uniquely identifies the Content resource whose approval information to fetch.
     */
    sid: string;
}
export declare class FetchApprovalFetchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    contentV1ContentApprovalFetch?: shared.ContentV1ContentApprovalFetch;
}
