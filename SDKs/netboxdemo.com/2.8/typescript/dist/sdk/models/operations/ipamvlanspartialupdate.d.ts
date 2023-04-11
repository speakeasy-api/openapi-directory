import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamVlansPartialUpdateRequest extends SpeakeasyBase {
    writableVLANInput: shared.WritableVLANInput;
    /**
     * A unique integer value identifying this VLAN.
     */
    id: number;
}
export declare class IpamVlansPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    vlan?: shared.Vlan;
}
