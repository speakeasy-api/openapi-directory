import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TemplatesUpdateSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class TemplatesUpdateRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * ID of template
     */
    templateId: string;
}
export declare class TemplatesUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    templateResponse?: shared.TemplateResponse;
}
