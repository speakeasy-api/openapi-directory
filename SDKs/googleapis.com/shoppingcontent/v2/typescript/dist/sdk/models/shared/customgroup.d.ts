import { SpeakeasyBase } from "../../../internal/utils";
import { CustomAttribute } from "./customattribute";
export declare class CustomGroup extends SpeakeasyBase {
    /**
     * The sub-attributes.
     */
    attributes?: CustomAttribute[];
    /**
     * The name of the group. Underscores will be replaced by spaces upon insertion.
     */
    name?: string;
}
