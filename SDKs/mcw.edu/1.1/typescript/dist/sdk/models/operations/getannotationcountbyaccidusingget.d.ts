import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAnnotationCountByAccIdUsingGETRequest extends SpeakeasyBase {
    /**
     * Ontology term accession ID
     */
    accId: string;
    /**
     * true: return annotations for the term and children, false: return annotations for the term only
     */
    includeChildren: boolean;
}
export declare class GETAnnotationCountByAccIdUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
