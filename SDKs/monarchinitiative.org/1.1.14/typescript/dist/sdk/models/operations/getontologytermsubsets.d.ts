import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOntologyTermSubsetsRequest extends SpeakeasyBase {
    /**
     * CURIE identifier of a GO term, e.g. GO:0006259
     */
    id: string;
}
export declare class GetOntologyTermSubsetsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
