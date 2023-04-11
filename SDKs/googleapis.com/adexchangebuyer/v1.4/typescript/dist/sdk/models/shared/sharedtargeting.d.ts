import { SpeakeasyBase } from "../../../internal/utils";
import { TargetingValue } from "./targetingvalue";
export declare class SharedTargeting extends SpeakeasyBase {
    /**
     * The list of values to exclude from targeting. Each value is AND'd together.
     */
    exclusions?: TargetingValue[];
    /**
     * The list of value to include as part of the targeting. Each value is OR'd together.
     */
    inclusions?: TargetingValue[];
    /**
     * The key representing the shared targeting criterion.
     */
    key?: string;
}
