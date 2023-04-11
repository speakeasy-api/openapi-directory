import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Configures what properties of the enrolled CRM object are included in the action execution request
 */
export declare class ObjectRequestOptions extends SpeakeasyBase {
    /**
     * A list of properties of the CRM object to include with the request to the `actionUrl`.
     */
    properties: string[];
}
