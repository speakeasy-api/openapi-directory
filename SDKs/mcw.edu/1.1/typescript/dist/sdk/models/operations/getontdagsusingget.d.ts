import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETOntDagsUsingGETRequest extends SpeakeasyBase {
    /**
     * Accession ID
     */
    accId: string;
}
export declare class GETOntDagsUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
