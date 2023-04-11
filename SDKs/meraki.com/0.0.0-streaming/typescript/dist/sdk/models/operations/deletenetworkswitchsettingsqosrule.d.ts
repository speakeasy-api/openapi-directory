import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSwitchSettingsQosRuleRequest extends SpeakeasyBase {
    networkId: string;
    qosRuleId: string;
}
export declare class DeleteNetworkSwitchSettingsQosRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
