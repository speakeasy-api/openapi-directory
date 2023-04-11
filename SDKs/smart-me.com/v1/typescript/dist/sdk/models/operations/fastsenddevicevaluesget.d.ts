import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class FastSendDeviceValuesGetRequest extends SpeakeasyBase {
    id: string;
}
export declare class FastSendDeviceValuesGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
