import { SpeakeasyBase } from "../../../internal/utils";
import { App } from "./app";
/**
 * Successful response
 */
export declare class GetApplicationResponse extends SpeakeasyBase {
    app: App;
    /**
     * Duration of the request in human-readable format
     */
    duration: string;
}
