import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutCustomerCategoriesIdJsonRequest extends SpeakeasyBase {
    /**
     * CustomerCategory parameters.
     */
    customerCategoryEdit: shared.CustomerCategoryEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the CustomerCategory
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PutCustomerCategoriesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    customerCategory?: shared.CustomerCategory;
    /**
     * CustomerCategory Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
