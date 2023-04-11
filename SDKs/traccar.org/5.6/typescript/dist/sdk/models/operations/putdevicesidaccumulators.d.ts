import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutDevicesIdAccumulatorsRequest extends SpeakeasyBase {
    deviceAccumulators: shared.DeviceAccumulators;
    id: number;
}
export declare class PutDevicesIdAccumulatorsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
