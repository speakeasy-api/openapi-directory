import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFieldValueServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListFieldValueSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFieldValueRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the FieldType associated with the resources to read.
     */
    assistantSid: string;
    /**
     * The SID of the Field Type associated with the Field Value to read.
     */
    fieldTypeSid: string;
    /**
     * The [ISO language-country](https://docs.oracle.com/cd/E13214_01/wli/docs92/xref/xqisocodes.html) tag that specifies the language of the value. Currently supported tags: `en-US`
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
export declare class ListFieldValueListFieldValueResponseMeta extends SpeakeasyBase {
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
export declare class ListFieldValueListFieldValueResponse extends SpeakeasyBase {
    fieldValues?: shared.AutopilotV1AssistantFieldTypeFieldValue[];
    meta?: ListFieldValueListFieldValueResponseMeta;
}
export declare class ListFieldValueResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFieldValueResponse?: ListFieldValueListFieldValueResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
