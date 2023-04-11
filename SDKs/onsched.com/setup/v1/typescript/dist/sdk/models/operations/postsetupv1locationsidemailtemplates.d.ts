import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSetupV1LocationsIdEmailTemplatesRequest extends SpeakeasyBase {
    /**
     * Input model for email template
     */
    emailTemplateInputModel?: shared.EmailTemplateInputModel;
    /**
     * id of business location, defaults to primary business location
     */
    id: string;
}
export declare class PostSetupV1LocationsIdEmailTemplatesResponse extends SpeakeasyBase {
    /**
     * Success
     */
    contentResult?: shared.ContentResult;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
