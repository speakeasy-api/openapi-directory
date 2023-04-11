import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the origination details of an order.
 */
export declare class OrderSource extends SpeakeasyBase {
    /**
     * The name used to identify the place (physical or digital) that an order originates.
     *
     * @remarks
     * If unset, the name defaults to the name of the application that created the order.
     */
    name?: string;
}
