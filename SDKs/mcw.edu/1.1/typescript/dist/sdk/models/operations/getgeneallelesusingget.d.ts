import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGeneAllelesUsingGETRequest extends SpeakeasyBase {
    /**
     * RGD ID of gene
     */
    rgdId: number;
}
export declare class GETGeneAllelesUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
