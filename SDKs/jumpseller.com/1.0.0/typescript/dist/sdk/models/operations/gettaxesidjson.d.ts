import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetTaxesIdJsonRequest extends SpeakeasyBase {
    /**
     * API OAuth token.
     */
    authtoken: string;
    /**
     * Id of the Tax
     */
    id: number;
    /**
     * API OAuth login.
     */
    login: string;
}
export declare class GetTaxesIdJsonResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Tax Not Found.
     */
    notFound?: shared.NotFound;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A Tax information object
     */
    tax?: shared.Tax;
}
