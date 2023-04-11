import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAffectedGenomicModelsUsingGETRequest extends SpeakeasyBase {
    /**
     * The taxon ID for species
     */
    taxonId: string;
}
export declare class GETAffectedGenomicModelsUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
