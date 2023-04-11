import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetWirelessLANsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetWirelessLANsRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class GetWirelessLANsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * array of wireless LANs
     */
    wirelesses?: shared.Wireless[];
}
