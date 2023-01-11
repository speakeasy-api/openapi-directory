import { SpeakeasyBase } from "../../../internal/utils";
import { TimePeriod } from "./timeperiod";
export declare enum RateModelCoverageLevelEnum {
    Child = "Child",
    Ee = "EE",
    EePlus1 = "EE+1",
    EePlusChild = "EE+Child",
    EePlusChildren = "EE+Children",
    EePlusSpouse = "EE+Spouse",
    Family = "Family",
    Pmpm = "PMPM",
    Spouse = "Spouse"
}
export declare class RateModel extends SpeakeasyBase {
    amount: number;
    coverageLevel: RateModelCoverageLevelEnum;
    period: TimePeriod;
}
