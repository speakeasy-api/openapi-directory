import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CompaniesEmailTemplatesMasterResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    masterEmailTemplateSettingsViewModel?: shared.MasterEmailTemplateSettingsViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
