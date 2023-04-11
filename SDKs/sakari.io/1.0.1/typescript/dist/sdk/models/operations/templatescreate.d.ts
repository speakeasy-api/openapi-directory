import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TemplatesCreateSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class TemplatesCreateRequest extends SpeakeasyBase {
    templateRequest?: shared.TemplateRequest;
    /**
     * Account to apply operations to
     */
    accountId: string;
}
export declare class TemplatesCreateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    templatesResponse?: shared.TemplatesResponse;
}
