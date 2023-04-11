import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAnnotationsByAccIdAndRgdIdUsingGETRequest extends SpeakeasyBase {
    /**
     * Ontology Term Accession ID
     */
    accId: string;
    /**
     * RGD ID
     */
    rgdId: number;
}
export declare class GETAnnotationsByAccIdAndRgdIdUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
