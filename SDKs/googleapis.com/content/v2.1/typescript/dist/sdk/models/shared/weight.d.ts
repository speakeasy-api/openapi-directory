import { SpeakeasyBase } from "../../../internal/utils";
export declare class Weight extends SpeakeasyBase {
    /**
     * Required. The weight unit. Acceptable values are: - "`kg`" - "`lb`"
     */
    unit?: string;
    /**
     * Required. The weight represented as a number. The weight can have a maximum precision of four decimal places.
     */
    value?: string;
}
