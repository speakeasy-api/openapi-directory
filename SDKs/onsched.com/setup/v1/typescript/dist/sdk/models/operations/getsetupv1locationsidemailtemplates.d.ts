import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSetupV1LocationsIdEmailTemplatesRequest extends SpeakeasyBase {
    id: string;
}
export declare class GetSetupV1LocationsIdEmailTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    emailTemplateListViewModel?: shared.EmailTemplateListViewModel;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
