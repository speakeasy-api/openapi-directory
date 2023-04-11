import { SpeakeasyBase } from "../../../internal/utils";
import { OBBranchAndFinancialInstitutionIdentification5 } from "./obbranchandfinancialinstitutionidentification5";
import { OBCashAccount5 } from "./obcashaccount5";
import { OBExternalAccountSubType1CodeEnum } from "./obexternalaccountsubtype1codeenum";
import { OBExternalAccountType1CodeEnum } from "./obexternalaccounttype1codeenum";
/**
 * Unambiguous identification of the account to which credit and debit entries are made.
 */
export declare class OBAccount6 extends SpeakeasyBase {
    /**
     * Provides the details to identify an account.
     */
    account?: OBCashAccount5[];
    /**
     * A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner.
     */
    accountId: string;
    accountSubType: OBExternalAccountSubType1CodeEnum;
    accountType: OBExternalAccountType1CodeEnum;
    /**
     * Identification of the currency in which the account is held.  Usage: Currency should only be used in case one and the same account number covers several currencies and the initiating party needs to identify which currency needs to be used for settlement on the account.
     */
    currency: string;
    /**
     * Specifies the description of the account type.
     */
    description?: string;
    /**
     * The nickname of the account, assigned by the account owner in order to provide an additional means of identification of the account.
     */
    nickname?: string;
    /**
     * Date on which the account and related basic services are effectively operational for the account owner.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00
     */
    openingDate?: Date;
    servicer?: OBBranchAndFinancialInstitutionIdentification5;
}
