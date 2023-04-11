import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUnderstandFieldServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandFieldSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUnderstandFieldRequest extends SpeakeasyBase {
    /**
     * The unique ID of the Assistant.
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
    /**
     * The unique ID of the Task associated with this Field.
     */
    taskSid: string;
}
export declare class ListUnderstandFieldListUnderstandFieldResponseMeta extends SpeakeasyBase {
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
export declare class ListUnderstandFieldListUnderstandFieldResponse extends SpeakeasyBase {
    fields?: shared.PreviewUnderstandAssistantTaskField[];
    meta?: ListUnderstandFieldListUnderstandFieldResponseMeta;
}
export declare class ListUnderstandFieldResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUnderstandFieldResponse?: ListUnderstandFieldListUnderstandFieldResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
