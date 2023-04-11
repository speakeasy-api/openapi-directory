import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Required configuration object parameters
 */
export declare class ConfigNewParam extends SpeakeasyBase {
    /**
     * A unique name to identify the configuration payload
     */
    name: string;
    /**
     * A serialised payload of up to `4096` characters
     */
    payload: string;
}
