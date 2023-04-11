import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GETEnsemblTranscriptMappingUsingGETRequest extends SpeakeasyBase {
    /**
     * RGD ID
     */
    rgdId: number;
}
export declare class GETEnsemblTranscriptMappingUsingGETResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
