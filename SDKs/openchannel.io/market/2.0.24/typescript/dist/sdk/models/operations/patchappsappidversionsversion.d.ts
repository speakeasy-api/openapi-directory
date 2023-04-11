import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PatchAppsAppIdVersionsVersionRequest extends SpeakeasyBase {
    /**
     * JSON array of data access requirements
     */
    access?: string;
    /**
     * JSON object to allow users to purchase or view this app. Example: {'purchase':{'country':['Canada','Mexico']}} allows only users from canada and mexico to purchase this app
     */
    allow?: string;
    /**
     * The id of the App to be updated
     */
    appId: string;
    /**
     * False if updates should skip the approval process and be available immediately. Default is True
     */
    approvalRequired?: string;
    /**
     * A custom set of app attributes defined by the administrator and attached to this app
     */
    attributes?: string;
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: string;
    /**
     * The unique id of the developer that is updating this app
     */
    developerId: string;
    /**
     * A JSON object representing the pricing model type for this app
     */
    model?: string;
    /**
     * The name of the app
     */
    name?: string;
    /**
     * JSON object to restrict users from purchasing or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'purchase':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or purchasing this app
     */
    restrict?: string;
    /**
     * The type for this app
     */
    type?: string;
    /**
     * The version of the App to be updated
     */
    version: string;
}
export declare class PatchAppsAppIdVersionsVersionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
