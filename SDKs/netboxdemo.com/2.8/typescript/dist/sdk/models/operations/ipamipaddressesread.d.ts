import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamIpAddressesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this IP address.
     */
    id: number;
}
export declare class IpamIpAddressesReadResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IPAddress;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
