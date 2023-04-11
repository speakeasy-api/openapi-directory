import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an Integration.
 */
export declare class Integration extends SpeakeasyBase {
    bic?: string;
    countries: string[];
    id: string;
    logo: string;
    name: string;
    transactionTotalDays?: string;
}
