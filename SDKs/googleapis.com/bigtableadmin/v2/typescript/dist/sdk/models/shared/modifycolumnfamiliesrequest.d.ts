import { SpeakeasyBase } from "../../../internal/utils";
import { Modification } from "./modification";
/**
 * Request message for google.bigtable.admin.v2.BigtableTableAdmin.ModifyColumnFamilies
 */
export declare class ModifyColumnFamiliesRequest extends SpeakeasyBase {
    /**
     * Required. Modifications to be atomically applied to the specified table's families. Entries are applied in order, meaning that earlier modifications can be masked by later ones (in the case of repeated updates to the same family, for example).
     */
    modifications?: Modification[];
}
