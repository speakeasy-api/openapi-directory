import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CompaniesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    companyViewModel?: shared.CompanyViewModel;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
