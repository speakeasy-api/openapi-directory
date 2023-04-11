import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETObjectsWithXDBsDiffUsingGETRequest extends SpeakeasyBase {
    /**
     * dateFromYYYYMMDD
     */
    dateFromYYYYMMDD: string;
    /**
     * dateToYYYYMMDD
     */
    dateToYYYYMMDD: string;
    /**
     * objectKey
     */
    objectKey: number;
    /**
     * speciesTypeKey
     */
    speciesTypeKey: number;
}
export declare class GETObjectsWithXDBsDiffUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
