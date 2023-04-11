import { SpeakeasyBase } from "../../../internal/utils";
import { CreatePayeeV3Input } from "./createpayeev3";
/**
 * Post payees to create.
 */
export declare class CreatePayeesRequestV3Input extends SpeakeasyBase {
    payees: CreatePayeeV3Input[];
    payorId: string;
}
