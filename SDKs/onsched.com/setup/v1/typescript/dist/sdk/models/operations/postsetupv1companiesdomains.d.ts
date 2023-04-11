import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1CompaniesDomainsResponse extends SpeakeasyBase {
    /**
     * Success
     */
    companyDomainViewModel?: shared.CompanyDomainViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
