import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePayeeV4 } from "./createpayeev4";
/**
 * Post payees to create.
 */
export declare class CreatePayeesRequestV4 extends SpeakeasyBase {
    payees: CreatePayeeV4[];
    payorId: string;
}
