import { SpeakeasyBase } from "../../../internal/utils";
import { OBBeneficiaryType1CodeEnum } from "./obbeneficiarytype1codeenum";
import { OBCashAccount5 } from "./obcashaccount5";
export declare class OBBeneficiary5 extends SpeakeasyBase {
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     */
    accountId?: string;
    /**
     * Specifies the Beneficiary Type.
     */
    beneficiaryType?: OBBeneficiaryType1CodeEnum;
    creditorAccount?: OBCashAccount5;
}
