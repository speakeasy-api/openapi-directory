import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGenesForLatestAssemblyUsingGETRequest extends SpeakeasyBase {
    /**
     * The taxon ID for species
     */
    taxonId: string;
}
export declare class GETGenesForLatestAssemblyUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
