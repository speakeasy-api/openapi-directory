import { SpeakeasyBase } from "../../../internal/utils";
/**
 * API Key object
 */
export declare class APIKeyInput extends SpeakeasyBase {
    /**
     * Custom name for the resource
     */
    name?: string;
}
/**
 * API Key object
 */
export declare class APIKey extends SpeakeasyBase {
    /**
     * Object id.
     */
    id?: string;
    /**
     * Authentication token
     */
    key?: string;
    /**
     * Custom name for the resource
     */
    name?: string;
}
