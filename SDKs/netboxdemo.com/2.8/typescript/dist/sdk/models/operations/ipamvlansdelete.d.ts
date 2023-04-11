import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IpamVlansDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this VLAN.
     */
    id: number;
}
export declare class IpamVlansDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
