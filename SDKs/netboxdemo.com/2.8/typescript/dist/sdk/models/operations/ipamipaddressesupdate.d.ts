import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamIpAddressesUpdateRequest extends SpeakeasyBase {
    writableIPAddressInput: shared.WritableIPAddressInput;
    /**
     * A unique integer value identifying this IP address.
     */
    id: number;
}
export declare class IpamIpAddressesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IPAddress;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
