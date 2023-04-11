import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAnnotsByRefrerenceUsingGETRequest extends SpeakeasyBase {
    /**
     * Reference RGD ID
     */
    refRgdId: number;
}
export declare class GETAnnotsByRefrerenceUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
