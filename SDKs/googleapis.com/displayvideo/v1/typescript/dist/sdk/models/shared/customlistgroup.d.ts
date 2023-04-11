import { SpeakeasyBase } from "../../../internal/utils";
import { CustomListTargetingSetting } from "./customlisttargetingsetting";
/**
 * Details of custom list group. All custom list targeting settings are logically ‘OR’ of each other.
 */
export declare class CustomListGroup extends SpeakeasyBase {
    /**
     * Required. All custom list targeting settings in custom list group. Repeated settings with same id will be ignored.
     */
    settings?: CustomListTargetingSetting[];
}
