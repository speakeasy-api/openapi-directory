import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamVrfsReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this VRF.
     */
    id: number;
}
export declare class IpamVrfsReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    vrf?: shared.Vrf;
}
