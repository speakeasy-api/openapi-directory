import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamVlanGroupsPartialUpdateRequest extends SpeakeasyBase {
    writableVLANGroupInput: shared.WritableVLANGroupInput;
    /**
     * A unique integer value identifying this VLAN group.
     */
    id: number;
}
export declare class IpamVlanGroupsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    vlanGroup?: shared.VLANGroup;
}
