import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1CompaniesEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
    /**
     * Email template name
     */
    templateName: string;
}
export declare class GetSetupV1CompaniesEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
    /**
     * Success
     */
    contentResult?: shared.ContentResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
