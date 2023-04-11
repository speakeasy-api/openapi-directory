import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGenesByKeywordUsingGETRequest extends SpeakeasyBase {
    /**
     * Search keyword
     */
    keyword: string;
    /**
     * Species type key.  A list of species type keys can be found in the lookup service
     */
    speciesTypeKey: number;
}
export declare class GETGenesByKeywordUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
