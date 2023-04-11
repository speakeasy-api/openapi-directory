import { SpeakeasyBase } from "../../../internal/utils";
export declare class ClusterCustomerAddress extends SpeakeasyBase {
    /**
     * Latitude
     */
    lat?: number;
    /**
     * Longitude
     */
    lon?: number;
    /**
     * Optional parameter. Specifies a hint for each address to better snap the coordinates (lon,lat) to road network. E.g. if there is an address or house with two or more neighboring streets you can control for which street the closest location is looked up.
     */
    streetHint?: string;
}
