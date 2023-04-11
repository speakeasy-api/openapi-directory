import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutSetupV1CompaniesDomainsIdRequest extends SpeakeasyBase {
    /**
     * Company Domain Update Model
     */
    companyDomainUpdateModel?: shared.CompanyDomainUpdateModel;
    /**
     * id of companyDomain object
     */
    id: string;
}
export declare class PutSetupV1CompaniesDomainsIdResponse extends SpeakeasyBase {
    /**
     * Success
     */
    companyDomainViewModel?: shared.CompanyDomainViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
