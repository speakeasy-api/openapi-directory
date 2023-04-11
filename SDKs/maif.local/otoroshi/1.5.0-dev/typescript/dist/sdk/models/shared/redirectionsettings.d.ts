import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The configuration for redirection per service
 */
export declare class RedirectionSettings extends SpeakeasyBase {
    /**
     * The http redirect code
     */
    code: number;
    /**
     * Whether or not redirection is enabled
     */
    enabled: boolean;
    /**
     * The location for redirection
     */
    to: string;
}
