import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerRequest extends SpeakeasyBase {
    networkId: string;
    trustedServerId: string;
}
export declare class DeleteNetworkSwitchDhcpServerPolicyArpInspectionTrustedServerResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
