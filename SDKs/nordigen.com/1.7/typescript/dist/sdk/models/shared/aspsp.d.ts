import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents an ASPSP.
**/
export declare class Aspsp extends SpeakeasyBase {
    bic?: string;
    countries: string[];
    id: string;
    logo: string;
    name: string;
    transactionTotalDays?: string;
}
