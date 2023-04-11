import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
    /**
     * Name of the email template
     */
    templateName: string;
}
export declare class DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
    /**
     * Success
     */
    contentResult?: shared.ContentResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
