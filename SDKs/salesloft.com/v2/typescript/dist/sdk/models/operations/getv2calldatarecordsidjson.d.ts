import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2CallDataRecordsIdJsonRequest extends SpeakeasyBase {
    /**
     * CallDataRecord ID
     */
    id: string;
}
export declare class GetV2CallDataRecordsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
