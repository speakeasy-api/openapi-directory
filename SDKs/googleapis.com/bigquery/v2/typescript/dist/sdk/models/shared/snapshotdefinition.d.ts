import { SpeakeasyBase } from "../../../internal/utils";
import { TableReference } from "./tablereference";
export declare class SnapshotDefinition extends SpeakeasyBase {
    baseTableReference?: TableReference;
    /**
     * [Required] The time at which the base table was snapshot. This value is reported in the JSON response using RFC3339 format.
     */
    snapshotTime?: Date;
}
