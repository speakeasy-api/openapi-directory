import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGeneOrthologsUsingGETRequest extends SpeakeasyBase {
    /**
     * RGD ID of a gene
     */
    rgdId: number;
}
export declare class GETGeneOrthologsUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
