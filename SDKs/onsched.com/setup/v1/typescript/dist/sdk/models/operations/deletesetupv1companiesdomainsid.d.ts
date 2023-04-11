import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1CompaniesDomainsIdRequest extends SpeakeasyBase {
    /**
     * id of companyDomain object
     */
    id: string;
}
export declare class DeleteSetupV1CompaniesDomainsIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    companyDomainViewModel?: shared.CompanyDomainViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
