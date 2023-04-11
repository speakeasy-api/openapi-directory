import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListEvaluationServerList: readonly ["https://numbers.twilio.com"];
export declare class ListEvaluationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListEvaluationRequest extends SpeakeasyBase {
    /**
     * The unique string that identifies the Bundle resource.
     */
    bundleSid: string;
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
export declare class ListEvaluationListEvaluationResponseMeta extends SpeakeasyBase {
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
export declare class ListEvaluationListEvaluationResponse extends SpeakeasyBase {
    meta?: ListEvaluationListEvaluationResponseMeta;
    results?: shared.NumbersV2RegulatoryComplianceBundleEvaluation[];
}
export declare class ListEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listEvaluationResponse?: ListEvaluationListEvaluationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
