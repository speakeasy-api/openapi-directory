import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOntologyTermRequest extends SpeakeasyBase {
    /**
     * CURIE identifier of a GO term, e.g. GO:0003677
     */
    id: string;
}
export declare class GetOntologyTermResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
