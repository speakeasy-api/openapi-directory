import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGeneBySymbolUsingGETRequest extends SpeakeasyBase {
    /**
     * Species type key.  A list of species type keys can be found in the lookup service
     */
    speciesTypeKey: number;
    /**
     * Gene Symbol
     */
    symbol: string;
}
export declare class GETGeneBySymbolUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
