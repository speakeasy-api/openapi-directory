import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamVlanGroupsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this VLAN group.
     */
    id: number;
}
export declare class IpamVlanGroupsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    vlanGroup?: shared.VLANGroup;
}
