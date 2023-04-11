import { SpeakeasyBase } from "../../../internal/utils";
import { LandlordProfitLossSectionModel } from "./landlordprofitlosssectionmodel";
/**
 * Class to represent proffit loss report.
 */
export declare class LandlordProfitLossModel extends SpeakeasyBase {
    /**
     * Class for a group of entries.
     */
    directCosts?: LandlordProfitLossSectionModel;
    /**
     * Class for a group of entries.
     */
    grossProfitLoss?: LandlordProfitLossSectionModel;
    /**
     * Class for a group of entries.
     */
    income?: LandlordProfitLossSectionModel;
}
