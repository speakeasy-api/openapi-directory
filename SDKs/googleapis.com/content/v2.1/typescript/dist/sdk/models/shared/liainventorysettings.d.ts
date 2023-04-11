import { SpeakeasyBase } from "../../../internal/utils";
export declare class LiaInventorySettings extends SpeakeasyBase {
    /**
     * The email of the contact for the inventory verification process.
     */
    inventoryVerificationContactEmail?: string;
    /**
     * The name of the contact for the inventory verification process.
     */
    inventoryVerificationContactName?: string;
    /**
     * The status of the verification contact. Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
     */
    inventoryVerificationContactStatus?: string;
    /**
     * The status of the inventory verification process. Acceptable values are: - "`active`" - "`inactive`" - "`pending`"
     */
    status?: string;
}
