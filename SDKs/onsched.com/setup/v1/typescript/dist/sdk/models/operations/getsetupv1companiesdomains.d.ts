import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CompaniesDomainsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    companyDomainListViewModel?: shared.CompanyDomainListViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
