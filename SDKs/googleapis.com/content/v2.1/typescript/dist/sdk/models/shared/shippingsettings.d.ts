import { SpeakeasyBase } from "../../../internal/utils";
import { PostalCodeGroup } from "./postalcodegroup";
import { Service } from "./service";
import { Warehouse } from "./warehouse";
/**
 * The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
 */
export declare class ShippingSettings extends SpeakeasyBase {
    /**
     * The ID of the account to which these account shipping settings belong. Ignored upon update, always present in get request responses.
     */
    accountId?: string;
    /**
     * A list of postal code groups that can be referred to in `services`. Optional.
     */
    postalCodeGroups?: PostalCodeGroup[];
    /**
     * The target account's list of services. Optional.
     */
    services?: Service[];
    /**
     * Optional. A list of warehouses which can be referred to in `services`.
     */
    warehouses?: Warehouse[];
}
