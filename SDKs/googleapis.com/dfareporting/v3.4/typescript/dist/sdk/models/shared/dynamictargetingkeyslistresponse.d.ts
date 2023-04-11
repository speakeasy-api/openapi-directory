import { SpeakeasyBase } from "../../../internal/utils";
import { DynamicTargetingKey } from "./dynamictargetingkey";
/**
 * Dynamic Targeting Key List Response
 */
export declare class DynamicTargetingKeysListResponse extends SpeakeasyBase {
    /**
     * Dynamic targeting key collection.
     */
    dynamicTargetingKeys?: DynamicTargetingKey[];
    /**
     * Identifies what kind of resource this is. Value: the fixed string "dfareporting#dynamicTargetingKeysListResponse".
     */
    kind?: string;
}
