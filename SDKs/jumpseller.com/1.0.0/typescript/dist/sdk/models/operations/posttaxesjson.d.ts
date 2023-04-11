import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostTaxesJsonRequest extends SpeakeasyBase {
    /**
     * Tax parameters.
     */
    taxEdit: shared.TaxEdit;
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class PostTaxesJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Tax Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * OK
     */
    tax?: shared.Tax;
}
