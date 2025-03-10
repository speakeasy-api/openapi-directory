import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUnderstandFieldValueServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandFieldValueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUnderstandFieldValueRequest extends SpeakeasyBase {
    assistantSid: string;
    fieldTypeSid: string;
    /**
     * An ISO language-country string of the value. For example: *en-US*
     */
    language?: string;
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
export declare class ListUnderstandFieldValueListUnderstandFieldValueResponseMeta extends SpeakeasyBase {
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
export declare class ListUnderstandFieldValueListUnderstandFieldValueResponse extends SpeakeasyBase {
    fieldValues?: shared.PreviewUnderstandAssistantFieldTypeFieldValue[];
    meta?: ListUnderstandFieldValueListUnderstandFieldValueResponseMeta;
}
export declare class ListUnderstandFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUnderstandFieldValueResponse?: ListUnderstandFieldValueListUnderstandFieldValueResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
