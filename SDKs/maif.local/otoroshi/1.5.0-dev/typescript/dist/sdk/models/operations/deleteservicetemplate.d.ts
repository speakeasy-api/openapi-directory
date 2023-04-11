import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteServiceTemplateSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class DeleteServiceTemplateRequest extends SpeakeasyBase {
    /**
     * The service id
     */
    serviceId: string;
}
export declare class DeleteServiceTemplateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Successful operation
     */
    deleted?: shared.Deleted;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
