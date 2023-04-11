import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
    /**
     * The id of the App to be removed
     */
    appId: string;
    /**
     * The unique id of the developer that is removing this app
     */
    developerId: string;
    /**
     * The version of the App to be removed
     */
    version: string;
}
export declare class DeleteAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
