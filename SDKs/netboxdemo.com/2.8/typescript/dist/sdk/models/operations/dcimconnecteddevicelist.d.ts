import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DcimConnectedDeviceListRequest extends SpeakeasyBase {
    /**
     * The name of the peer device
     */
    peerDevice: string;
    /**
     * The name of the peer interface
     */
    peerInterface: string;
}
export declare class DcimConnectedDeviceListResponse extends SpeakeasyBase {
    contentType: string;
    device?: shared.Device;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
