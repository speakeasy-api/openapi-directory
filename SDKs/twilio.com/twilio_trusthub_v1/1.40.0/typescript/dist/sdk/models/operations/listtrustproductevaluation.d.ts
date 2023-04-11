import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTrustProductEvaluationServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListTrustProductEvaluationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTrustProductEvaluationRequest extends SpeakeasyBase {
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
     * The unique string that we created to identify the trust_product resource.
     */
    trustProductSid: string;
}
export declare class ListTrustProductEvaluationListTrustProductEvaluationResponseMeta extends SpeakeasyBase {
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
export declare class ListTrustProductEvaluationListTrustProductEvaluationResponse extends SpeakeasyBase {
    meta?: ListTrustProductEvaluationListTrustProductEvaluationResponseMeta;
    results?: shared.TrusthubV1TrustProductTrustProductEvaluation[];
}
export declare class ListTrustProductEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTrustProductEvaluationResponse?: ListTrustProductEvaluationListTrustProductEvaluationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
