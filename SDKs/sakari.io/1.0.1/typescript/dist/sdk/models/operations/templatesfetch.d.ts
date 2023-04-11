import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class TemplatesFetchSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class TemplatesFetchRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * ID of template to return
     */
    templateId: string;
}
export declare class TemplatesFetchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    templateResponse?: shared.TemplateResponse;
}
