import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class RotateAccountOrganizationExportTokenSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class RotateAccountOrganizationExportTokenRequest extends SpeakeasyBase {
    /**
     * UUID of the organization to retrieve
     */
    orgId: string;
}
export declare class RotateAccountOrganizationExportTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * organization details
     */
    organization?: shared.Organization;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
