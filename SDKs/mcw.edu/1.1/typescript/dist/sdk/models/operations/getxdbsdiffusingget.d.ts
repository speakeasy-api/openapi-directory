import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETXdbsDiffUsingGETRequest extends SpeakeasyBase {
    /**
     * dateFromYYYYMMDD
     */
    dateFromYYYYMMDD: string;
    /**
     * dateToYYYYMMDD
     */
    dateToYYYYMMDD: string;
    /**
     * speciesTypeKey
     */
    speciesTypeKey: number;
}
export declare class GETXdbsDiffUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
