import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomersIdFieldsFieldIdRequest extends SpeakeasyBase {
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
export declare class GetCustomersIdFieldsFieldIdResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customerAdditionalField?: shared.CustomerAdditionalField;
    /**
     * Customer Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
