import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGeneByRgdIdUsingGETRequest extends SpeakeasyBase {
    /**
     * The RGD ID of a Gene in RGD
     */
    rgdId: number;
}
export declare class GETGeneByRgdIdUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
