import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGenesInRegionUsingGETRequest extends SpeakeasyBase {
    /**
     * Chromosome
     */
    chr: string;
    /**
     * A list of RGD assembly map keys can be found in the lookup service
     */
    mapKey: number;
    /**
     * Start Position
     */
    start: number;
    /**
     * Stop Position
     */
    stop: number;
}
export declare class GETGenesInRegionUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
