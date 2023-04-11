import { SpeakeasyBase } from "../../../internal/utils";
import { InstitutionalIdentification2 } from "./institutionalidentification2";
import { PostalAddress6CH } from "./postaladdress6ch";
/**
 * Reference to an creditorAgent by either
 *
 * @remarks
 *   * BIC, of the creditor bank, or
 *   * IID, of the creditor bank, or
 *   * IID and optional name and address of the creditor bank or
 *   * Name and address of the creditor bank
 * adapted from ISO pain.001.001.03.ch.02 FinancialInstitutionIdentification7-CH
 *
 */
export declare class CreditorAgent7CH extends SpeakeasyBase {
    /**
     * as in ISO pain.001.001.03.ch.02 PostalAddress6
     *
     * @remarks
     * If possible structured. Simultaneous use of the structured elements <StrtNm>/ <BldgNb>/<PstCd>/<TwnNm> and the unstructured element <AdrLine> is not permitted.
     * as in ISO pain.001.001.03.ch.02 PostalAddress6-CH
     *
     */
    address?: PostalAddress6CH;
    /**
     * BICFI
     *
     * @remarks
     *
     */
    bic?: string;
    /**
     * Institiutional identification of a bank (Clearing System Member ID)
     *
     * @remarks
     * adapted from ISO pain.001.001.03.ch.02 ClearingSystemMemberIdentification2
     *
     */
    iid?: InstitutionalIdentification2;
    name?: string;
}
