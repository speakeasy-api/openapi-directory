import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListCustomerProfileServerList: readonly ["https://trusthub.twilio.com"];
export declare class ListCustomerProfileSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListCustomerProfileRequest extends SpeakeasyBase {
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
    status?: shared.CustomerProfileEnumStatusEnum;
}
export declare class ListCustomerProfileListCustomerProfileResponseMeta extends SpeakeasyBase {
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
export declare class ListCustomerProfileListCustomerProfileResponse extends SpeakeasyBase {
    meta?: ListCustomerProfileListCustomerProfileResponseMeta;
    results?: shared.TrusthubV1CustomerProfile[];
}
export declare class ListCustomerProfileResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listCustomerProfileResponse?: ListCustomerProfileListCustomerProfileResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
