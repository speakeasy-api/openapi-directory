import { SpeakeasyBase } from "../../../internal/utils";
import { SubscriptionDefinition } from "./subscriptiondefinition";
/**
 * A collection of subscription definitions for the portal.
 */
export declare class SubscriptionDefinitionsResponse extends SpeakeasyBase {
    /**
     * A list of all subscription definitions.
     */
    subscriptionDefinitions: SubscriptionDefinition[];
}
