import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class EnterpriseAdminDeleteScimGroupFromEnterpriseRequest extends SpeakeasyBase {
    /**
     * A unique identifier of the SCIM group.
     */
    scimGroupId: string;
}
export declare class EnterpriseAdminDeleteScimGroupFromEnterpriseResponse extends SpeakeasyBase {
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
