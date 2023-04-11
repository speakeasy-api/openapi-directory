import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class StopPointMetaStopTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    stopPointMetaStopTypes200ApplicationJSONStrings?: string[];
    /**
     * OK
     */
    stopPointMetaStopTypes200TextJSONStrings?: string[];
}
