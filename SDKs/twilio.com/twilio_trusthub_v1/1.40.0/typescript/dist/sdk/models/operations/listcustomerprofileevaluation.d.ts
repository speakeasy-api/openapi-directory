import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCustomerProfileEvaluationServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListCustomerProfileEvaluationSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCustomerProfileEvaluationRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the CustomerProfile resource.
     */
    customerProfileSid: string;
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
export declare class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta extends SpeakeasyBase {
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
export declare class ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse extends SpeakeasyBase {
    meta?: ListCustomerProfileEvaluationListCustomerProfileEvaluationResponseMeta;
    results?: shared.TrusthubV1CustomerProfileCustomerProfileEvaluation[];
}
export declare class ListCustomerProfileEvaluationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCustomerProfileEvaluationResponse?: ListCustomerProfileEvaluationListCustomerProfileEvaluationResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
