import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAppsAppIdRequest extends SpeakeasyBase {
    /**
     * The id of the App to be removed
     */
    appId: string;
    /**
     * The unique id of the developer that is removing this app
     */
    developerId: string;
}
export declare class DeleteAppsAppIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
