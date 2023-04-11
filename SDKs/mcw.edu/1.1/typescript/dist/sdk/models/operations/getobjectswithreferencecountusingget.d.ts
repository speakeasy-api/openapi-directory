import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETObjectsWithReferenceCountUsingGETRequest extends SpeakeasyBase {
    /**
     * dateYYYYMMDD
     */
    dateYYYYMMDD: string;
    /**
     * speciesTypeKey
     */
    speciesTypeKey: number;
}
export declare class GETObjectsWithReferenceCountUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
