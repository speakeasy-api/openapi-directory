import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUnderstandFieldTypeServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandFieldTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUnderstandFieldTypeRequest extends SpeakeasyBase {
    assistantSid: string;
    /**
     * The page index. This value is simply for client state.
     */
    page?: number;
    /**
     * How many resources to return in each list page. The default is 50, and the maximum is 1000.
     */
    pageSize?: number;
    /**
     * The page token. This is provided by the API.
     */
    pageToken?: string;
}
export declare class ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta extends SpeakeasyBase {
    firstPageUrl?: string;
    key?: string;
    nextPageUrl?: string;
    page?: number;
    pageSize?: number;
    previousPageUrl?: string;
    url?: string;
}
/**
 * OK
 */
export declare class ListUnderstandFieldTypeListUnderstandFieldTypeResponse extends SpeakeasyBase {
    fieldTypes?: shared.PreviewUnderstandAssistantFieldType[];
    meta?: ListUnderstandFieldTypeListUnderstandFieldTypeResponseMeta;
}
export declare class ListUnderstandFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUnderstandFieldTypeResponse?: ListUnderstandFieldTypeListUnderstandFieldTypeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
