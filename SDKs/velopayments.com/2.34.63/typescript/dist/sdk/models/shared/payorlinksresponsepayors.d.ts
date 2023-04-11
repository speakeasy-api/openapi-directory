import { SpeakeasyBase } from "../../../internal/utils";
export declare class PayorLinksResponsePayors extends SpeakeasyBase {
    /**
     * Current KYC state. One of the following values: FAILED_KYC, PASSED_KYC, REQUIRES_KYC
     */
    kycState?: string;
    payorId: string;
    payorName: string;
    primaryContactEmail?: string;
}
