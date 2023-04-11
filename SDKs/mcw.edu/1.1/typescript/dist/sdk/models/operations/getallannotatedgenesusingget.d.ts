import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETAllAnnotatedGenesUsingGETRequest extends SpeakeasyBase {
    /**
     * Accesstion ID
     */
    accId: string;
}
export declare class GETAllAnnotatedGenesUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
