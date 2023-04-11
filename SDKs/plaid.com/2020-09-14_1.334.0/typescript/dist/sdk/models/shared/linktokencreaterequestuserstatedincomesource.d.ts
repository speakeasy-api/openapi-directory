import { SpeakeasyBase } from "../../../internal/utils";
import { UserStatedIncomeSourceCategoryEnum } from "./userstatedincomesourcecategoryenum";
import { UserStatedIncomeSourceFrequencyEnum } from "./userstatedincomesourcefrequencyenum";
import { UserStatedIncomeSourcePayTypeEnum } from "./userstatedincomesourcepaytypeenum";
/**
 * Specifies user stated income sources for the Income product
 */
export declare class LinkTokenCreateRequestUserStatedIncomeSource extends SpeakeasyBase {
    /**
     * The income category for a specified income source
     */
    category?: UserStatedIncomeSourceCategoryEnum;
    /**
     * The employer corresponding to an income source specified by the user
     */
    employer?: string;
    /**
     * The income amount paid annually for a specified income source
     */
    payAnnual?: number;
    /**
     * The pay frequency of a specified income source
     */
    payFrequency?: UserStatedIncomeSourceFrequencyEnum;
    /**
     * The income amount paid per cycle for a specified income source
     */
    payPerCycle?: number;
    /**
     * The pay type - `GROSS`, `NET`, or `UNKNOWN` for a specified income source
     */
    payType?: UserStatedIncomeSourcePayTypeEnum;
}
