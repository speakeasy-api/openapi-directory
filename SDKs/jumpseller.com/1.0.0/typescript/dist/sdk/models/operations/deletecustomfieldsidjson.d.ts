import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCustomFieldsIdJsonRequest extends SpeakeasyBase {
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
export declare class DeleteCustomFieldsIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * CustomField Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteCustomFieldsIdJSON200ApplicationJSONString?: string;
}
