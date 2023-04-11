import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamIpAddressesPartialUpdateRequest extends SpeakeasyBase {
    writableIPAddressInput: shared.WritableIPAddressInput;
    /**
     * A unique integer value identifying this IP address.
     */
    id: number;
}
export declare class IpamIpAddressesPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IPAddress;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
