import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSensorAlertsProfileRequest extends SpeakeasyBase {
    id: string;
    networkId: string;
}
export declare class DeleteNetworkSensorAlertsProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
