import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
/**
 * Response for the apps list request.
 */
export declare class ListAppsResponse extends SpeakeasyBase {
    /**
     * The resulting apps for the requested account.
     */
    apps?: App[];
    /**
     * If not empty, indicates that there may be more apps for the request; this value should be passed in a new `ListAppsRequest`.
     */
    nextPageToken?: string;
}
