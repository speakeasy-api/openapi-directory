import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomFieldsIdJsonRequest extends SpeakeasyBase {
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
export declare class GetCustomFieldsIdJsonResponse extends SpeakeasyBase {
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
