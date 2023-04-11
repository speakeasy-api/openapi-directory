import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Data about military info in the income verification precheck.
 */
export declare class IncomeVerificationPrecheckMilitaryInfo extends SpeakeasyBase {
    /**
     * If the user is currently serving in the US military, the branch of the military in which they are serving
     *
     * @remarks
     * Valid values: 'AIR FORCE', 'ARMY', 'COAST GUARD', 'MARINES', 'NAVY', 'UNKNOWN'
     */
    branch?: string;
    /**
     * Is the user currently active duty in the US military
     */
    isActiveDuty?: boolean;
}
