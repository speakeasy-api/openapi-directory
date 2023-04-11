import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostCustomersIdFieldsRequest extends SpeakeasyBase {
    /**
     * Customer Additional Field parameters.
     */
    customerAdditionalFieldEdit: shared.CustomerAdditionalFieldEdit;
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
export declare class PostCustomersIdFieldsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customerAdditionalField?: shared.CustomerAdditionalField;
    /**
     * Customer Additional Field Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
