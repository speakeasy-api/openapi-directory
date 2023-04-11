import { SpeakeasyBase } from "../../../internal/utils";
import { WebApp } from "./webapp";
/**
 * Successful response
 */
export declare class WebAppsListResponse extends SpeakeasyBase {
    /**
     * The manifest describing a web app.
     */
    webApp?: WebApp[];
}
