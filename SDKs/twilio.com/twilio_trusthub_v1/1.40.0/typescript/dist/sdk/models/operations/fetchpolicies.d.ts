import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchPoliciesServerList: readonly ["https://trusthub.twilio.com"];
export declare class FetchPoliciesSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchPoliciesRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Policy resource.
     */
    sid: string;
}
export declare class FetchPoliciesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trusthubV1Policies?: shared.TrusthubV1Policies;
}
