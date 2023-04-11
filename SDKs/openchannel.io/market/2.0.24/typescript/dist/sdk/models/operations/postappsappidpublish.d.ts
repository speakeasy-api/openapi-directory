import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAppsAppIdPublishRequest extends SpeakeasyBase {
    /**
     * The id of the app to be published
     */
    appId: string;
    /**
     * If true, this AppVersion is automatically approved and becomes immediately available to end users
     */
    autoApprove?: boolean;
    /**
     * The unique id of the developer that is modifying this app
     */
    developerId: string;
    /**
     * The version of the app to be published
     */
    version: number;
}
export declare class PostAppsAppIdPublishResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
