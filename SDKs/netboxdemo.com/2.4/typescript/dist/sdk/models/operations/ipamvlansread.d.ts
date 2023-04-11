import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamVlansReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this VLAN.
     */
    id: number;
}
export declare class IpamVlansReadResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    vlan?: shared.Vlan;
}
