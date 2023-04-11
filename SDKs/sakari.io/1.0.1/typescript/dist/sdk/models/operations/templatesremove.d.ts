import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class TemplatesRemoveSecurity extends SpeakeasyBase {
    sakariAuth: string;
}
export declare class TemplatesRemoveRequest extends SpeakeasyBase {
    /**
     * Account to apply operations to
     */
    accountId: string;
    /**
     * Template id to delete
     */
    templateId: string;
}
/**
 * successful operation
 */
export declare class TemplatesRemove200ApplicationJSON extends SpeakeasyBase {
    success?: boolean;
}
export declare class TemplatesRemoveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * successful operation
     */
    templatesRemove200ApplicationJSONObject?: TemplatesRemove200ApplicationJSON;
}
