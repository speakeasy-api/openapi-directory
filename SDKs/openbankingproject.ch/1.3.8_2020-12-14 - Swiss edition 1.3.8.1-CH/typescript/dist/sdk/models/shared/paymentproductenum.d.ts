/**
 * The addressed payment product endpoint, e.g. for SEPA Credit Transfers (SCT).
 *
 * @remarks
 * The ASPSP will publish which of the payment products/endpoints will be supported.
 *
 * The following payment products are supported:
 *   - domestic-swiss-credit-transfers-isr
 *   - domestic-swiss-credit-transfers
 *   - domestic-swiss-credit-transfers-qr
 *   - domestic-swiss-foreign-credit-transfers
 *   - swiss-sepa-credit-transfers
 *   - swiss-cross-border-credit-transfers
 *   - pain.001-sepa-credit-transfers
 *   - pain.001-cross-border-credit-transfers
 *   - pain.001-swiss-six-credit-transfers
 *
 * **Remark:** For all SEPA Credit Transfer based endpoints which accept XML encoding,
 * the XML pain.001 schemes provided by EPC are supported by the ASPSP as a minimum for the body content.
 * Further XML schemes might be supported by some communities.
 *
 * **Remark:** For cross-border and TARGET-2 payments only community wide pain.001 schemes do exist.
 * There are plenty of country specificic scheme variants.
 *
 */
export declare enum PaymentProductEnum {
    DomesticSwissCreditTransfersIsr = "domestic-swiss-credit-transfers-isr",
    DomesticSwissCreditTransfers = "domestic-swiss-credit-transfers",
    DomesticSwissCreditTransfersQr = "domestic-swiss-credit-transfers-qr",
    DomesticSwissForeignCreditTransfers = "domestic-swiss-foreign-credit-transfers",
    SwissSepaCreditTransfers = "swiss-sepa-credit-transfers",
    SwissCrossBorderCreditTransfers = "swiss-cross-border-credit-transfers",
    Pain001SepaCreditTransfers = "pain.001-sepa-credit-transfers",
    Pain001CrossBorderCreditTransfers = "pain.001-cross-border-credit-transfers",
    Pain001SwissSixCreditTransfers = "pain.001-swiss-six-credit-transfers"
}
