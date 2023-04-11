import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGeneByMapKeyUsingGETRequest extends SpeakeasyBase {
    /**
     * A list of RGD assembly map keys can be found in the lookup service
     */
    mapKey: number;
}
export declare class GETGeneByMapKeyUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
