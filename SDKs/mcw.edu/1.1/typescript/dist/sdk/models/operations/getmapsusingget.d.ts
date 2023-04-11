import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETMapsUsingGETRequest extends SpeakeasyBase {
    /**
     * RGD species type key. A full list of keys is available throught the lookup service.  1=human, 2=mouse, 3=rat,ect
     */
    speciesTypeKey: number;
}
export declare class GETMapsUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
