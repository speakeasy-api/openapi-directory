import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingValue } from "./targetingvalue";
/**
 * Advertisers can target different attributes of an ad slot. For example, they can choose to show ads only if the user is in the U.S. Such targeting criteria can be specified as part of Shared Targeting.
 */
export declare class TargetingCriteria extends SpeakeasyBase {
    /**
     * The list of values to exclude from targeting. Each value is AND'd together.
     */
    exclusions?: TargetingValue[];
    /**
     * The list of value to include as part of the targeting. Each value is OR'd together.
     */
    inclusions?: TargetingValue[];
    /**
     * The key representing the shared targeting criterion. Targeting criteria defined by Google ad servers will begin with GOOG_. Third parties may define their own keys. A list of permissible keys along with the acceptable values will be provided as part of the external documentation.
     */
    key?: string;
}
