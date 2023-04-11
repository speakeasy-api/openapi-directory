import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2MimeEmailPayloadsIdJsonRequest extends SpeakeasyBase {
    /**
     * ID of Email
     */
    id: string;
}
export declare class GetV2MimeEmailPayloadsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
