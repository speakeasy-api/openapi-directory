import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateServiceTemplateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class CreateServiceTemplateRequest extends SpeakeasyBase {
    errorTemplate?: shared.ErrorTemplate;
    /**
     * The service id
     */
    serviceId: string;
}
export declare class CreateServiceTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    errorTemplate?: shared.ErrorTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
