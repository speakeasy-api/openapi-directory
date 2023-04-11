import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RemoveWirelessLANSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RemoveWirelessLANRequest extends SpeakeasyBase {
    /**
     * UUID of the wireless LAN to remove
     */
    wirelessId: string;
}
export declare class RemoveWirelessLANResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
