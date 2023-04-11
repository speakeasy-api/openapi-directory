import { SpeakeasyBase } from "../../../internal/utils";
export declare class V3VehicleDescriptor extends SpeakeasyBase {
    /**
     * Indicator if vehicle is air conditioned. May be null. Only available for some tram runs.
     */
    airConditioned?: boolean;
    /**
     * Vehicle description such as "6 Car Comeng", "6 Car Xtrapolis", "3 Car Comeng", "6 Car Siemens", "3 Car Siemens". May be null/empty.
     *
     * @remarks
     *             Only available for some metropolitan train runs.
     */
    description?: string;
    /**
     * Operator identifier of the vehicle such as "26094". May be null/empty. Only available for some tram and bus runs.
     */
    id?: string;
    /**
     * The length of the vehicle. Applies to CIS - Metro Trains
     */
    length?: string;
    /**
     * Indicator if vehicle has a low floor. May be null. Only available for some tram runs.
     */
    lowFloor?: boolean;
    /**
     * Operator name of the vehicle such as "Metro Trains Melbourne", "Yarra Trams", "Ventura Bus Line", "CDC" or "Sita Bus Lines" . May be null/empty.
     *
     * @remarks
     *             Only available for train, tram, v/line and some bus runs.
     */
    operator?: string;
    /**
     * Supplier of vehicle descriptor data.
     */
    supplier?: string;
}
