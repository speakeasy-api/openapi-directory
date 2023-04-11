import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETChromosomesByAssemblyUsingGETRequest extends SpeakeasyBase {
    /**
     * mapKey
     */
    mapKey: number;
}
export declare class GETChromosomesByAssemblyUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
