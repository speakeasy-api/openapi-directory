import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IpamVlanGroupsDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this VLAN group.
     */
    id: number;
}
export declare class IpamVlanGroupsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
