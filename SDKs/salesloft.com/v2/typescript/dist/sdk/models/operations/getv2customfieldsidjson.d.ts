import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetV2CustomFieldsIdJsonRequest extends SpeakeasyBase {
    /**
     * Custom Field ID
     */
    id: string;
}
export declare class GetV2CustomFieldsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
