import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1BusinessusersEmailCompaniesRequest extends SpeakeasyBase {
    /**
     * Email of business user
     */
    email: string;
    /**
     * Page limit default 20, max 100
     */
    limit?: number;
    /**
     * Starting row of page, default 0
     */
    offset?: number;
    /**
     * All or partial company name
     */
    searchText?: string;
}
export declare class GetSetupV1BusinessusersEmailCompaniesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    authorizedCompanyListViewModel?: shared.AuthorizedCompanyListViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
