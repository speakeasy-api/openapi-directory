import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGeneTypeDiffUsingGETRequest extends SpeakeasyBase {
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
export declare class GETGeneTypeDiffUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
