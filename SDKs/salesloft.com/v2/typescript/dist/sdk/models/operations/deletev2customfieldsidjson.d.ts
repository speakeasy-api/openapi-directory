import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteV2CustomFieldsIdJsonRequest extends SpeakeasyBase {
    /**
     * Custom Field ID
     */
    id: string;
}
export declare class DeleteV2CustomFieldsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
