import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateAccountOrganizationSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateAccountOrganizationRequest extends SpeakeasyBase {
    /**
     * organization options
     */
    orgOptions: shared.OrgOptions;
    /**
     * UUID of the organization to retrieve
     */
    orgId: string;
}
export declare class UpdateAccountOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * organization details
     */
    organization?: shared.Organization;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
