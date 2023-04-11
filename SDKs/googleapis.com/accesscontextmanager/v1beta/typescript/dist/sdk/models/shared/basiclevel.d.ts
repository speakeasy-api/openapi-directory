import { SpeakeasyBase } from "../../../internal/utils";
import { Condition } from "./condition";
/**
 * How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND.
 */
export declare enum BasicLevelCombiningFunctionEnum {
    And = "AND",
    Or = "OR"
}
/**
 * `BasicLevel` is an `AccessLevel` using a set of recommended features.
 */
export declare class BasicLevel extends SpeakeasyBase {
    /**
     * How the `conditions` list should be combined to determine if a request is granted this `AccessLevel`. If AND is used, each `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. If OR is used, at least one `Condition` in `conditions` must be satisfied for the `AccessLevel` to be applied. Default behavior is AND.
     */
    combiningFunction?: BasicLevelCombiningFunctionEnum;
    /**
     * Required. A list of requirements for the `AccessLevel` to be granted.
     */
    conditions?: Condition[];
}
