import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ServiceTemplateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ServiceTemplateRequest extends SpeakeasyBase {
    /**
     * The service id
     */
    serviceId: string;
}
export declare class ServiceTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    errorTemplate?: shared.ErrorTemplate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
