import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAppsAppIdLiveRequest extends SpeakeasyBase {
    /**
     * The id of the App to be changed
     */
    appId: string;
    /**
     * The unique id of the developer that is changing this AppVersion
     */
    developerId: string;
    /**
     * The new version of the live App
     */
    version: string;
}
export declare class PostAppsAppIdLiveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
