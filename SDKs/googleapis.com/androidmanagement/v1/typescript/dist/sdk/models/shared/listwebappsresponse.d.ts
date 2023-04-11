import { SpeakeasyBase } from "../../../internal/utils";
import { WebApp } from "./webapp";
/**
 * Response to a request to list web apps for a given enterprise.
 */
export declare class ListWebAppsResponse extends SpeakeasyBase {
    /**
     * If there are more results, a token to retrieve next page of results.
     */
    nextPageToken?: string;
    /**
     * The list of web apps.
     */
    webApps?: WebApp[];
}
