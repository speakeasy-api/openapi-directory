import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkFirmwareUpgradesStagedGroupRequest extends SpeakeasyBase {
    groupId: string;
    networkId: string;
}
export declare class DeleteNetworkFirmwareUpgradesStagedGroupResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
