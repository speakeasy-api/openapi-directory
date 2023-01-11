import { SpeakeasyBase } from "../../../internal/utils";
import { Address } from "./address";
/**
 * A warehouse
**/
export declare class CreateWarehouseRequestBodyInput extends SpeakeasyBase {
    name: string;
    originAddress: Address;
    returnAddress?: Address;
}
