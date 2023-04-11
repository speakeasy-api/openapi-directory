import { SpeakeasyBase } from "../../../internal/utils";
import { TableReference } from "./tablereference";
export declare class CloneDefinition extends SpeakeasyBase {
    baseTableReference?: TableReference;
    /**
     * [Required] The time at which the base table was cloned. This value is reported in the JSON response using RFC3339 format.
     */
    cloneTime?: Date;
}
