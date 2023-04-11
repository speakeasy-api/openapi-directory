import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCustomFieldsIdSelectOptionsJsonRequest extends SpeakeasyBase {
    /**
     * Custom Field Select Option parameters.
     */
    customFieldSelectOptionEdit: shared.CustomFieldSelectOptionEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Automatically added
     */
    id: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostCustomFieldsIdSelectOptionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customFieldSelectOption?: shared.CustomFieldSelectOption;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
