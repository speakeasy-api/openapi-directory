import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const FetchIpAccessControlListServerList: readonly ["https://trunking.twilio.com"];
export declare class FetchIpAccessControlListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class FetchIpAccessControlListRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the IpAccessControlList resource to fetch.
     */
    sid: string;
    /**
     * The SID of the Trunk from which to fetch the IP Access Control List.
     */
    trunkSid: string;
}
export declare class FetchIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    trunkingV1TrunkIpAccessControlList?: shared.TrunkingV1TrunkIpAccessControlList;
}
