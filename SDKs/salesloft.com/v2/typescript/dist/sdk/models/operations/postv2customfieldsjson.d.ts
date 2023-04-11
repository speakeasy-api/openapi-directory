import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostV2CustomFieldsJsonRequestBody extends SpeakeasyBase {
    /**
     * The field type of the custom field. Value must be one of: person, company, opportunity
     */
    fieldType?: string;
    /**
     * The name of the custom field
     */
    name: string;
}
export declare class PostV2CustomFieldsJsonResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
