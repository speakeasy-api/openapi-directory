import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAccountOrganizationExportTokenSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class DeleteAccountOrganizationExportTokenRequest extends SpeakeasyBase {
    /**
     * UUID of the organization to retrieve
     */
    orgId: string;
}
export declare class DeleteAccountOrganizationExportTokenResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
