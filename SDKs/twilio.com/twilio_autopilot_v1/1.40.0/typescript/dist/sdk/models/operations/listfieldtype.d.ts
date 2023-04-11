import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListFieldTypeServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListFieldTypeSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListFieldTypeRequest extends SpeakeasyBase {
    /**
     * The SID of the [Assistant](https://www.twilio.com/docs/autopilot/api/assistant) that is the parent of the resources to read.
     */
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
export declare class ListFieldTypeListFieldTypeResponseMeta extends SpeakeasyBase {
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
export declare class ListFieldTypeListFieldTypeResponse extends SpeakeasyBase {
    fieldTypes?: shared.AutopilotV1AssistantFieldType[];
    meta?: ListFieldTypeListFieldTypeResponseMeta;
}
export declare class ListFieldTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listFieldTypeResponse?: ListFieldTypeListFieldTypeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
