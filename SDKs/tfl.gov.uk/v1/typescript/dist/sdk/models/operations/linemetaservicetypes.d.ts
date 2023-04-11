import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class LineMetaServiceTypesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    lineMetaServiceTypes200ApplicationJSONStrings?: string[];
    /**
     * OK
     */
    lineMetaServiceTypes200TextJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
