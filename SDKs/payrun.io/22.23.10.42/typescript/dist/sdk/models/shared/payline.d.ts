import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The pay lines' pay code type
 */
export declare enum PayLinePayLinePayCodeTypeEnum {
    NotSet = "NotSet",
    Payment = "Payment",
    Deduction = "Deduction"
}
export declare class PayLinePayLine extends SpeakeasyBase {
    /**
     * The pay lines' calculator
     */
    calculator?: string;
    /**
     * The pay lines' description
     */
    description?: string;
    /**
     * The pay lines' generated
     */
    generated?: Date;
    /**
     * The pay lines' pay code
     */
    payCode?: string;
    /**
     * The pay lines' pay code type
     */
    payCodeType?: PayLinePayLinePayCodeTypeEnum;
    /**
     * The pay lines' pay run sequence
     */
    payRunSequence?: number;
    /**
     * The pay lines' payment date
     */
    paymentDate?: Date;
    /**
     * The pay lines' tax period
     */
    taxPeriod?: number;
    /**
     * The pay lines' tax year
     */
    taxYear?: number;
    /**
     * The pay lines' value
     */
    value?: number;
}
/**
 * The pay line object.
 */
export declare class PayLine extends SpeakeasyBase {
    payLine?: PayLinePayLine;
}
