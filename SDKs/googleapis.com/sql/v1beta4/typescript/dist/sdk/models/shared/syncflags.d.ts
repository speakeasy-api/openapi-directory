import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump.
 */
export declare class SyncFlags extends SpeakeasyBase {
    /**
     * The name of the flag.
     */
    name?: string;
    /**
     * The value of the flag. This field must be omitted if the flag doesn't take a value.
     */
    value?: string;
}
