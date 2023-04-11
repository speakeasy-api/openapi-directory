import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The category that the incentive/law/regulation falls under, described below: -State Incentives, -Laws and Regulations, -Utility/Private Incentives
 */
export declare class LawType extends SpeakeasyBase {
    /**
     * The code used to identify the law type
     */
    code: string;
    /**
     * The id of the law type
     */
    id: number;
    /**
     * The name of the law type
     */
    title: string;
}
