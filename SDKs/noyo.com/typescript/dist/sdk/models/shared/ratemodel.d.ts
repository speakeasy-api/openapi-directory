import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
/**
 * Coverage level of the rate
 */
export declare enum RateModelCoverageLevelEnum {
    Child = "Child",
    Ee = "EE",
    EEPlus1 = "EE+1",
    EEPlusChild = "EE+Child",
    EEPlusChildren = "EE+Children",
    EEPlusSpouse = "EE+Spouse",
    Family = "Family",
    Pmpm = "PMPM",
    Spouse = "Spouse"
}
export declare class RateModel extends SpeakeasyBase {
    /**
     * Amount of the member premium
     */
    amount: number;
    /**
     * Coverage level of the rate
     */
    coverageLevel: RateModelCoverageLevelEnum;
    period: TimePeriod;
}
