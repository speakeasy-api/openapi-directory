import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamVrfsUpdateRequest extends SpeakeasyBase {
    writableVRFInput: shared.WritableVRFInput;
    /**
     * A unique integer value identifying this VRF.
     */
    id: number;
}
export declare class IpamVrfsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    vrf?: shared.Vrf;
}
