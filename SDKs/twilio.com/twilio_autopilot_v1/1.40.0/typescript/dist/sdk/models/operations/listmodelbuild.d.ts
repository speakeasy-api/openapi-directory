import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare const ListModelBuildServerList: readonly ["https://autopilot.twilio.com"];
export declare class ListModelBuildSecurity extends SpeakeasyBase {
    password: string;
    username: string;
}
export declare class ListModelBuildRequest extends SpeakeasyBase {
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
export declare class ListModelBuildListModelBuildResponseMeta extends SpeakeasyBase {
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
export declare class ListModelBuildListModelBuildResponse extends SpeakeasyBase {
    meta?: ListModelBuildListModelBuildResponseMeta;
    modelBuilds?: shared.AutopilotV1AssistantModelBuild[];
}
export declare class ListModelBuildResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    listModelBuildResponse?: ListModelBuildListModelBuildResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
