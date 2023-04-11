import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkWirelessRfProfileRequest extends SpeakeasyBase {
    networkId: string;
    rfProfileId: string;
}
export declare class DeleteNetworkWirelessRfProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
