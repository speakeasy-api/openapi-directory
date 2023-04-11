import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare const DeleteIpAccessControlListServerList: readonly ["https://trunking.twilio.com"];
export declare class DeleteIpAccessControlListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteIpAccessControlListRequest extends SpeakeasyBase {
    /**
     * The unique string that we created to identify the IpAccessControlList resource to delete.
     */
    sid: string;
    /**
     * The SID of the Trunk from which to delete the IP Access Control List.
     */
    trunkSid: string;
}
export declare class DeleteIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
