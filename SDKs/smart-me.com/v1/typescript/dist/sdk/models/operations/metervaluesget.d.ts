import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class MeterValuesGetRequest extends SpeakeasyBase {
    date: Date;
    id: string;
}
export declare class MeterValuesGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    deviceInPast?: shared.DeviceInPast;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
