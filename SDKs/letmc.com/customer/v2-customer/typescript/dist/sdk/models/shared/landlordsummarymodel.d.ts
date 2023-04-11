import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordSummaryTenancyModel } from "./landlordsummarytenancymodel";
/**
 * Landlord Summary - Landing Page.
 */
export declare class LandlordSummaryModel extends SpeakeasyBase {
    /**
     * Account Balance
     */
    accountBalance?: number;
    /**
     * Last Payment Made
     */
    lastPayment?: Date;
    /**
     * Tenancies
     */
    tenancies?: LandlordSummaryTenancyModel[];
    /**
     * Rent Arrears
     */
    totalRentArrears?: number;
}
