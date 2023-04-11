import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETObjectsWithXDBsCountUsingGETRequest extends SpeakeasyBase {
    /**
     * dateYYYYMMDD
     */
    dateYYYYMMDD: string;
    /**
     * objectKey
     */
    objectKey: number;
    /**
     * speciesTypeKey
     */
    speciesTypeKey: number;
}
export declare class GETObjectsWithXDBsCountUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
