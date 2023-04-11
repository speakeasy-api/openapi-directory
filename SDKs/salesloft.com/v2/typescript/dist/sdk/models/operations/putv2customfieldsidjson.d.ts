import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PutV2CustomFieldsIdJsonRequestBody extends SpeakeasyBase {
    /**
     * The field type of the custom field. Value must be one of: person, company, opportunity
     */
    fieldType?: string;
    /**
     * The name of the custom field
     */
    name?: string;
}
export declare class PutV2CustomFieldsIdJsonRequest extends SpeakeasyBase {
    requestBody?: PutV2CustomFieldsIdJsonRequestBody;
    /**
     * Custom Field ID
     */
    id: string;
}
export declare class PutV2CustomFieldsIdJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
