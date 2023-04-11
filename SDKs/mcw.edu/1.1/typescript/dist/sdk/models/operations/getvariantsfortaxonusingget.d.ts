import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETVariantsForTaxonUsingGETRequest extends SpeakeasyBase {
    /**
     * The taxon ID for species
     */
    taxonId: string;
}
export declare class GETVariantsForTaxonUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
