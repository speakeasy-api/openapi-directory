import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAnnotationCountByAccIdAndSpeciesUsingGETRequest extends SpeakeasyBase {
    /**
     * Ontology term accession ID
     */
    accId: string;
    /**
     * true: return annotations for the term and children, false: return annotations for the term only
     */
    includeChildren: boolean;
    /**
     * A list of species type keys can be found using the lookup service
     */
    speciesTypeKey: number;
}
export declare class GETAnnotationCountByAccIdAndSpeciesUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
