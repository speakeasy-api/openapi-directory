import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETChromosomeByAssemblyUsingGETRequest extends SpeakeasyBase {
    /**
     * chromosome
     */
    chromosome: string;
    /**
     * mapKey
     */
    mapKey: number;
}
export declare class GETChromosomeByAssemblyUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
