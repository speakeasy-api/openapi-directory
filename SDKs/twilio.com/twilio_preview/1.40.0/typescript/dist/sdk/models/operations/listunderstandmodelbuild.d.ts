import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListUnderstandModelBuildServerList: readonly ["https://preview.twilio.com"];
export declare class ListUnderstandModelBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListUnderstandModelBuildRequest extends SpeakeasyBase {
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
export declare class ListUnderstandModelBuildListUnderstandModelBuildResponseMeta extends SpeakeasyBase {
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
export declare class ListUnderstandModelBuildListUnderstandModelBuildResponse extends SpeakeasyBase {
    meta?: ListUnderstandModelBuildListUnderstandModelBuildResponseMeta;
    modelBuilds?: shared.PreviewUnderstandAssistantModelBuild[];
}
export declare class ListUnderstandModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listUnderstandModelBuildResponse?: ListUnderstandModelBuildListUnderstandModelBuildResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
