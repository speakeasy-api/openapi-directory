import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETMappedSSLPByPositionUsingGETRequest extends SpeakeasyBase {
    /**
     * Chromosome
     */
    chr: string;
    /**
     * A list of assembly map keys can be found using the lookup service
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
export declare class GETMappedSSLPByPositionUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
