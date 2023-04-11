import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonRequest extends SpeakeasyBase {
    /**
     * CustomFieldSelectOption parameters.
     */
    customFieldSelectOptionEdit: shared.CustomFieldSelectOptionEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the CustomFieldSelectOption
     */
    customFieldSelectOptionId: number;
    /**
     * Id of the CustomField
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PutCustomFieldsIdSelectOptionsCustomFieldSelectOptionIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customFieldSelectOption?: shared.CustomFieldSelectOption;
    /**
     * CustomFieldSelectOption Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
