import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCustomFieldsJsonRequest extends SpeakeasyBase {
    /**
     * Custom Field parameters.
     */
    customFieldEdit: shared.CustomFieldEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostCustomFieldsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customField?: shared.CustomField;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
