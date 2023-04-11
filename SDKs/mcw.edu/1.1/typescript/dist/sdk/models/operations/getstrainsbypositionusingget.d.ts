import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETStrainsByPositionUsingGETRequest extends SpeakeasyBase {
    /**
     * Chromosome
     */
    chr: string;
    /**
     * RGD Map Key (available through lookup service)
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
export declare class GETStrainsByPositionUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
