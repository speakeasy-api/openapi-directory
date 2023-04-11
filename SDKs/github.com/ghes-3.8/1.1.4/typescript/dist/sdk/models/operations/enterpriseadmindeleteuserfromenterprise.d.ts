import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDeleteUserFromEnterpriseRequest extends SpeakeasyBase {
    /**
     * The unique identifier of the SCIM user.
     */
    scimUserId: string;
}
export declare class EnterpriseAdminDeleteUserFromEnterpriseResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Resource not found
     */
    basicError?: shared.BasicError;
    /**
     * Bad request
     */
    scimError?: shared.ScimError;
}
