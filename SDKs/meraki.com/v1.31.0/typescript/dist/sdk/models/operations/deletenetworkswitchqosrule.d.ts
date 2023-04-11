import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSwitchQosRuleRequest extends SpeakeasyBase {
    networkId: string;
    qosRuleId: string;
}
export declare class DeleteNetworkSwitchQosRuleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
