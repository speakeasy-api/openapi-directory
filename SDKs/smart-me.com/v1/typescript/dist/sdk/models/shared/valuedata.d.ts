import { SpeakeasyBase } from "../../../internal/utils";
/**
 * API Container for a (Device) Value
 */
export declare class ValueData extends SpeakeasyBase {
    /**
     * The Obis code of this value.
     *
     * @remarks
     *             A description you can find here:
     *             http://wiki.smart-me.com/index.php/Obis_codes
     */
    obis?: string;
    /**
     * The Value
     */
    value?: number;
}
