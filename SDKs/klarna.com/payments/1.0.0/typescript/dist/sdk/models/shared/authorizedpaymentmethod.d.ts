import { SpeakeasyBase } from "../../../internal/utils";
export declare enum AuthorizedPaymentMethodTypeEnum {
    Invoice = "invoice",
    FixedAmount = "fixed_amount",
    BaseAccount = "base_account",
    DirectDebit = "direct_debit",
    DirectBankTransfer = "direct_bank_transfer",
    B2bInvoice = "b2b_invoice",
    Card = "card",
    SliceItByCard = "slice_it_by_card",
    PayLaterByCard = "pay_later_by_card",
    PayByCard = "pay_by_card",
    FixedSumCredit = "fixed_sum_credit"
}
export declare class AuthorizedPaymentMethod extends SpeakeasyBase {
    numberOfDays?: number;
    numberOfInstallments?: number;
    type: AuthorizedPaymentMethodTypeEnum;
}
