import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWirelessLANSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetWirelessLANRequest extends SpeakeasyBase {
    /**
     * UUID of the wireless LAN to retrieve
     */
    wirelessId: string;
}
export declare class GetWirelessLANResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * wireless details
     */
    wireless?: shared.Wireless;
}
