import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class IpamIpAddressesDeleteRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this IP address.
     */
    id: number;
}
export declare class IpamIpAddressesDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
