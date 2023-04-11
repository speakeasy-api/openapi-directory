import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETTermUsingGETRequest extends SpeakeasyBase {
    /**
     * Term Accession ID
     */
    accId: string;
}
export declare class GETTermUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
