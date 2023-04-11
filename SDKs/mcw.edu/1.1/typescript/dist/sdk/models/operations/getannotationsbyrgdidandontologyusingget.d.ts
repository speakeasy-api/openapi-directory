import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAnnotationsByRgdIdAndOntologyUsingGETRequest extends SpeakeasyBase {
    /**
     * Ontology Prefix.  The prefix can be found left of the semicolon in an ontology term accession ID.  As an example, term accession PW:0000034 has the ontology prefix PW
     */
    ontologyPrefix: string;
    /**
     * RGD ID
     */
    rgdId: number;
}
export declare class GETAnnotationsByRgdIdAndOntologyUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
