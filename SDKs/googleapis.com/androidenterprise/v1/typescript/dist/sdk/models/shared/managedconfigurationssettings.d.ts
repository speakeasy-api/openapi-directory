import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A managed configurations settings resource contains the set of managed properties that have been configured for an Android app to be applied to a set of users. The app's developer would have defined configurable properties in the managed configurations schema.
 */
export declare class ManagedConfigurationsSettings extends SpeakeasyBase {
    /**
     * The last updated time of the managed configuration settings in milliseconds since 1970-01-01T00:00:00Z.
     */
    lastUpdatedTimestampMillis?: string;
    /**
     * The ID of the managed configurations settings.
     */
    mcmId?: string;
    /**
     * The name of the managed configurations settings.
     */
    name?: string;
}
