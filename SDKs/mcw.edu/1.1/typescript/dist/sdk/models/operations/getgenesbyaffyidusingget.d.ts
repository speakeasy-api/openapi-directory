import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGenesByAffyIdUsingGETRequest extends SpeakeasyBase {
    /**
     * Affymetrix ID
     */
    affyId: string;
    /**
     * A list of RGD species type keys can be found in the lookup service
     */
    speciesTypeKey: number;
}
export declare class GETGenesByAffyIdUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
