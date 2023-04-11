import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Customer Additional Field
     */
    fieldId: number;
    /**
     * Id of the Customer
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class DeleteCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Customer Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    deleteCustomersIdFieldsFieldId200ApplicationJSONString?: string;
}
