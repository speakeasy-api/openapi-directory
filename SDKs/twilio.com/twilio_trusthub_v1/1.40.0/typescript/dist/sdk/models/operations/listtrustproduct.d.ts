import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListTrustProductServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListTrustProductSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListTrustProductRequest extends SpeakeasyBase {
    /**
     * The string that you assigned to describe the resource.
     */
    friendlyName?: string;
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
     * The unique string of a policy that is associated to the Customer-Profile resource.
     */
    policySid?: string;
    /**
     * The verification status of the Customer-Profile resource.
     */
    status?: shared.TrustProductEnumStatusEnum;
}
export declare class ListTrustProductListTrustProductResponseMeta extends SpeakeasyBase {
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
export declare class ListTrustProductListTrustProductResponse extends SpeakeasyBase {
    meta?: ListTrustProductListTrustProductResponseMeta;
    results?: shared.TrusthubV1TrustProduct[];
}
export declare class ListTrustProductResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listTrustProductResponse?: ListTrustProductListTrustProductResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
