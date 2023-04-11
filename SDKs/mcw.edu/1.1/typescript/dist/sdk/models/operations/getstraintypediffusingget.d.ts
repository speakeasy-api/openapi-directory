import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETStrainTypeDiffUsingGETRequest extends SpeakeasyBase {
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
export declare class GETStrainTypeDiffUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
