import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetOntologySubsetRequest extends SpeakeasyBase {
    /**
     * name of a slim subset, e.g. goslim_agr, goslim_generic
     */
    id: string;
}
export declare class GetOntologySubsetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
