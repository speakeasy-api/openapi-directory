import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
    /**
     * The id of the App to be located
     */
    appId: string;
    /**
     * The unique id of the developer that is requesting this resource
     */
    developerId?: string;
    /**
     * The version number of the app
     */
    version: number;
}
export declare class GetAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
