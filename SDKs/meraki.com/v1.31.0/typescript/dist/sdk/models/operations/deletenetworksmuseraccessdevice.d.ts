import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteNetworkSmUserAccessDeviceRequest extends SpeakeasyBase {
    networkId: string;
    userAccessDeviceId: string;
}
export declare class DeleteNetworkSmUserAccessDeviceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
