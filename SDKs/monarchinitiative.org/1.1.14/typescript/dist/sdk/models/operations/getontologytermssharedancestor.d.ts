import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOntologyTermsSharedAncestorRequest extends SpeakeasyBase {
    /**
     * CURIE identifier of a GO term, e.g. GO:0046483
     */
    object: string;
    /**
     * CURIE identifier of a GO term, e.g. GO:0006259
     */
    subject: string;
}
export declare class GetOntologyTermsSharedAncestorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
