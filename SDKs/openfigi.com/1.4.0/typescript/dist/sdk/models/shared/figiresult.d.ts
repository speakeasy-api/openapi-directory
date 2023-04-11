import { SpeakeasyBase } from "../../../internal/utils";
export declare class FigiResult extends SpeakeasyBase {
    compositeFIGI?: string;
    exchCode?: string;
    figi?: string;
    marketSector?: string;
    /**
     * Exists when API is unable to show non-FIGI fields.
     */
    metadata?: string;
    name?: string;
    securityDescription?: string;
    securityType?: string;
    securityType2?: string;
    shareClassFIGI?: string;
    ticker?: string;
}
