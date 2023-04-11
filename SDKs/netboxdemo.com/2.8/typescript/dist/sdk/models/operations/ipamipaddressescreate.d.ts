import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class IpamIpAddressesCreateResponse extends SpeakeasyBase {
    contentType: string;
    ipAddress?: shared.IPAddress;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
