import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
    identityPskId: string;
    networkId: string;
    number: string;
}
export declare class DeleteNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
