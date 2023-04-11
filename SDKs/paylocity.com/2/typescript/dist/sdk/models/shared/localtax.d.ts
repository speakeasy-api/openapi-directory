import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The Local Tax model
 */
export declare class LocalTax extends SpeakeasyBase {
    /**
     * Local tax exemptions value.<br  />Decimal (12,2)
     */
    exemptions?: number;
    /**
     * Local tax exemptions 2 value.<br  />Decimal (12,2)
     */
    exemptions2?: number;
    /**
     * Employee local tax filing status. Must match specific local tax setup. <br  /> Max length: 50
     */
    filingStatus?: string;
    /**
     * Resident PSD (political subdivision code) applicable in PA. Must match Company setup.<br  /> Max length: 9
     */
    residentPSD?: string;
    /**
     * Local tax code.<br  />Max length: 50
     */
    taxCode?: string;
    /**
     * Work location PSD. Must match Company setup. <br  /> Max length: 9
     */
    workPSD?: string;
}
