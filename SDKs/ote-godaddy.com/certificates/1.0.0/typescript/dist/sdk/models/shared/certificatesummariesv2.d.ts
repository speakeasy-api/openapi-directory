import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateSummaryV2 } from "./certificatesummaryv2";
import { Pagination } from "./pagination";
/**
 * Customer certificate information retrieved.
 */
export declare class CertificateSummariesV2 extends SpeakeasyBase {
    /**
     * List of certificates for a specified customer.
     */
    certificates: CertificateSummaryV2[];
    pagination: Pagination;
}
