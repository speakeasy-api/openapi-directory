import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class UpdateOrganizationSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class UpdateOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * organization details
     */
    organization?: shared.Organization;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
