import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETGTEXMappingUsingGETRequest extends SpeakeasyBase {
    /**
     * RGD ID
     */
    rgdId: number;
}
export declare class GETGTEXMappingUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
