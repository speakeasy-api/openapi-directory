import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
    /**
     * id of business location
     */
    id: string;
    /**
     * name of the email template
     */
    templateName: string;
}
export declare class GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
    /**
     * Success
     */
    contentResult?: shared.ContentResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
