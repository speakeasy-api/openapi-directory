import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigurationVariables } from "./configurationvariables";
import { ManagedProperty } from "./managedproperty";
/**
 * A managed configuration resource contains the set of managed properties defined by the app developer in the app's managed configurations schema, as well as any configuration variables defined for the user.
 */
export declare class ManagedConfiguration extends SpeakeasyBase {
    /**
     * A configuration variables resource contains the managed configuration settings ID to be applied to a single user, as well as the variable set that is attributed to the user. The variable set will be used to replace placeholders in the managed configuration settings.
     */
    configurationVariables?: ConfigurationVariables;
    /**
     * Deprecated.
     */
    kind?: string;
    /**
     * The set of managed properties for this configuration.
     */
    managedProperty?: ManagedProperty[];
    /**
     * The ID of the product that the managed configuration is for, e.g. "app:com.google.android.gm".
     */
    productId?: string;
}
