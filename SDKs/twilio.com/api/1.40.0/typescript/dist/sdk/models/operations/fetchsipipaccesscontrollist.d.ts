import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchSipIpAccessControlListServerList: readonly ["https://api.twilio.com"];
export declare class FetchSipIpAccessControlListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchSipIpAccessControlListRequest extends SpeakeasyBase {
    /**
     * The unique id of the [Account](https://www.twilio.com/docs/iam/api/account) responsible for this resource.
     */
    accountSid: string;
    /**
     * A 34 character string that uniquely identifies the resource to fetch.
     */
    sid: string;
}
export declare class FetchSipIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    apiV2010AccountSipSipIpAccessControlList?: shared.ApiV2010AccountSipSipIpAccessControlList;
}
