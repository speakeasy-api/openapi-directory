import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetAccountOrganizationsSecurity extends SpeakeasyBase {
    bearerAuth: string;
}
export declare class GetAccountOrganizationsRequest extends SpeakeasyBase {
    /**
     * an optional search string for filtering results
     */
    search?: string;
}
export declare class GetAccountOrganizationsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * array of organizations
     */
    organizations?: shared.Organization[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
