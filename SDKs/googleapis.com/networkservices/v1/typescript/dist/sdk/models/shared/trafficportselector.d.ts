import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specification of a port-based selector.
 */
export declare class TrafficPortSelector extends SpeakeasyBase {
    /**
     * Optional. A list of ports. Can be port numbers or port range (example, [80-90] specifies all ports from 80 to 90, including 80 and 90) or named ports or * to specify all ports. If the list is empty, all ports are selected.
     */
    ports?: string[];
}
