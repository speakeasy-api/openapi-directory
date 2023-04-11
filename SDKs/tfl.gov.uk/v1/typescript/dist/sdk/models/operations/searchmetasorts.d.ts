import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SearchMetaSortsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    searchMetaSorts200ApplicationJSONStrings?: string[];
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    searchMetaSorts200TextJSONStrings?: string[];
}
