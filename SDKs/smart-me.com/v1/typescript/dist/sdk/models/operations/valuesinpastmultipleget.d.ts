import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ValuesInPastMultipleGetRequest extends SpeakeasyBase {
    /**
     * The date when the last value should start
     */
    endDate: Date;
    /**
     * The ID of the device
     */
    id: string;
    /**
     * The interval in minutes betwenn the values. 0 means as fast as possible. Only 1000 values can be get in one call.
     */
    interval: number;
    /**
     * The date when the first value should start
     */
    startDate: Date;
}
export declare class ValuesInPastMultipleGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    valuesData?: shared.ValuesData[];
}
