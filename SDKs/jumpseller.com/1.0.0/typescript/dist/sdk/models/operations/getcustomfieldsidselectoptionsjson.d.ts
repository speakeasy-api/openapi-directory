import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomFieldsIdSelectOptionsJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the CustomField
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetCustomFieldsIdSelectOptionsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Custom Fields Select Options
     */
    customFieldSelectOptions?: shared.CustomFieldSelectOption[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
