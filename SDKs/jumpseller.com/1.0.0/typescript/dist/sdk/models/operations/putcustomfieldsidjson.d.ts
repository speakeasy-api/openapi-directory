import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCustomFieldsIdJsonRequest extends SpeakeasyBase {
    /**
     * CustomField parameters.
     */
    customFieldEdit: shared.CustomFieldEdit;
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
export declare class PutCustomFieldsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customField?: shared.CustomField;
    /**
     * CustomField Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
