import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const CreateIpAccessControlListServerList: readonly ["https://trunking.twilio.com"];
export declare class CreateIpAccessControlListSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateIpAccessControlListCreateIpAccessControlListRequest extends SpeakeasyBase {
    /**
     * The SID of the [IP Access Control List](https://www.twilio.com/docs/voice/sip/api/sip-ipaccesscontrollist-resource) that you want to associate with the trunk.
     */
    ipAccessControlListSid: string;
}
export declare class CreateIpAccessControlListRequest extends SpeakeasyBase {
    requestBody?: CreateIpAccessControlListCreateIpAccessControlListRequest;
    /**
     * The SID of the Trunk to associate the IP Access Control List with.
     */
    trunkSid: string;
}
export declare class CreateIpAccessControlListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Created
     */
    trunkingV1TrunkIpAccessControlList?: shared.TrunkingV1TrunkIpAccessControlList;
}
