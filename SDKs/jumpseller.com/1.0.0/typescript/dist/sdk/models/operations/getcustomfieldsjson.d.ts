import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomFieldsJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetCustomFieldsJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * An array of Custom Fields
     */
    customFields?: shared.CustomField[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
