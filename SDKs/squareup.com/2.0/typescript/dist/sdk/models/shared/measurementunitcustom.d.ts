import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The information needed to define a custom unit, provided by the seller.
 */
export declare class MeasurementUnitCustom extends SpeakeasyBase {
    /**
     * The abbreviation of the custom unit, such as "bsh" (bushel). This appears
     *
     * @remarks
     * in the cart for the Point of Sale app, and in reports.
     */
    abbreviation: string;
    /**
     * The name of the custom unit, for example "bushel".
     */
    name: string;
}
