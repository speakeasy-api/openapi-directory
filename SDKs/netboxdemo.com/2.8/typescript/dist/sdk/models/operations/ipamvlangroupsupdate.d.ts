import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamVlanGroupsUpdateRequest extends SpeakeasyBase {
    writableVLANGroupInput: shared.WritableVLANGroupInput;
    /**
     * A unique integer value identifying this VLAN group.
     */
    id: number;
}
export declare class IpamVlanGroupsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    vlanGroup?: shared.VLANGroup;
}
