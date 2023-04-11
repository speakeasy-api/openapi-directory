import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CompaniesEmailTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    emailTemplateListViewModel?: shared.EmailTemplateListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
