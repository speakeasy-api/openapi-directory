import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Database flags for Cloud SQL instances.
 */
export declare class DatabaseFlags extends SpeakeasyBase {
    /**
     * The name of the flag. These flags are passed at instance startup, so include both server options and system variables. Flags are specified with underscores, not hyphens. For more information, see [Configuring Database Flags](https://cloud.google.com/sql/docs/mysql/flags) in the Cloud SQL documentation.
     */
    name?: string;
    /**
     * The value of the flag. Boolean flags are set to `on` for true and `off` for false. This field must be omitted if the flag doesn't take a value.
     */
    value?: string;
}
