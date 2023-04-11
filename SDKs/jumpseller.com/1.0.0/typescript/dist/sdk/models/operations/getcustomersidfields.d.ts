import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetCustomersIdFieldsRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Customer
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetCustomersIdFieldsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customerAdditionalFields?: shared.CustomerAdditionalField[];
    /**
     * Customer Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
