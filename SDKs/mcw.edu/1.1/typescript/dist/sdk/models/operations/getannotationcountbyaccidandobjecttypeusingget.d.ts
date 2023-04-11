import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAnnotationCountByAccIdAndObjectTypeUsingGETRequest extends SpeakeasyBase {
    /**
     * Ontology term accession ID
     */
    accId: string;
    /**
     * true: return annotations for the term and children, false: return annotations for the term only
     */
    includeChildren: boolean;
    /**
     * A list of object types can be found using the lookup service
     */
    objectType: number;
    /**
     * A list of species type keys can be found using the lookup service
     */
    speciesTypeKey: number;
}
export declare class GETAnnotationCountByAccIdAndObjectTypeUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
