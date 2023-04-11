import { SpeakeasyBase } from "../../../internal/utils";
import { Alert } from "./alert";
/**
 * Successful response
 */
export declare class Alerts extends SpeakeasyBase {
    /**
     * The alerts returned in this list response.
     */
    items?: Alert[];
    /**
     * Kind of list this is, in this case adsense#alerts.
     */
    kind?: string;
}
