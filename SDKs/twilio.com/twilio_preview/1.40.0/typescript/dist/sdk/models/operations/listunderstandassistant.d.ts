import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUnderstandAssistantServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandAssistantSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUnderstandAssistantRequest extends SpeakeasyBase {
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
export declare class ListUnderstandAssistantListUnderstandAssistantResponseMeta extends SpeakeasyBase {
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
export declare class ListUnderstandAssistantListUnderstandAssistantResponse extends SpeakeasyBase {
    assistants?: shared.PreviewUnderstandAssistant[];
    meta?: ListUnderstandAssistantListUnderstandAssistantResponseMeta;
}
export declare class ListUnderstandAssistantResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUnderstandAssistantResponse?: ListUnderstandAssistantListUnderstandAssistantResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
