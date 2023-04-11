import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetApiV2SegmentsIdContentSecurity extends SpeakeasyBase {
    cdOauth2: string;
}
export declare class GetApiV2SegmentsIdContentRequest extends SpeakeasyBase {
    id: number;
}
export declare class GetApiV2SegmentsIdContentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * The audio content of the requested segment.
     */
    getApiV2SegmentsIdContent200ApplicationOctetStreamBinaryString?: Uint8Array;
}
