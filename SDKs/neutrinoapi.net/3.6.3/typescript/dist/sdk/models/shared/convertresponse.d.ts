import { SpeakeasyBase } from "../../../internal/utils";
export declare class ConvertResponse extends SpeakeasyBase {
    /**
     * The type of the value being converted from
     */
    fromType: string;
    /**
     * The value being converted from
     */
    fromValue: string;
    /**
     * The result of the conversion in string format
     */
    result: string;
    /**
     * The result of the conversion as a floating-point number
     */
    resultFloat: number;
    /**
     * The type being converted to
     */
    toType: string;
    /**
     * True if the conversion was successful and produced a valid result
     */
    valid: boolean;
}
