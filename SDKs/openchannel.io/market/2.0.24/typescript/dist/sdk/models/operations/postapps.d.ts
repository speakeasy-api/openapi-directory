import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostAppsRequest extends SpeakeasyBase {
    /**
     * JSON array of data access requirements
     */
    access?: string;
    /**
     * JSON object to restrict users from owning or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'own':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or owning this app
     */
    allow?: string;
    /**
     * A custom set of app attributes defined by the administrator and attached to this app
     */
    attributes?: string;
    /**
     * A custom JSON object that you can create and attach to this record
     */
    customData?: string;
    /**
     * The unique id of the developer that is adding this app
     */
    developerId: string;
    /**
     * A JSON object representing the pricing model type for this app
     */
    model?: string;
    /**
     * The name of the app
     */
    name: string;
    /**
     * JSON object to restrict users from owning or viewing this app. Example: {'view':{'country':['Canada','Mexico']},'own':{'country':['Canada','Mexico']}} restricts users from canada and mexico from viewing or owning this app
     */
    restrict?: string;
    /**
     * The type for this app
     */
    type?: string;
}
export declare class PostAppsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
