import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAnnotationsByRgdIdUsingGETRequest extends SpeakeasyBase {
    /**
     * RGD ID
     */
    rgdId: number;
}
export declare class GETAnnotationsByRgdIdUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
