import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * A warehouse
**/
export declare class UpdateWarehouseRequestBodyInput extends SpeakeasyBase {
    name: string;
    originAddress: Address;
    returnAddress?: Address;
}
