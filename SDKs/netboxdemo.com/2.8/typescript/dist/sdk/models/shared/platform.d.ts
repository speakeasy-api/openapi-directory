import { SpeakeasyBase } from "../../../internal/utils";
import { NestedManufacturer } from "./nestedmanufacturer";
export declare class Platform extends SpeakeasyBase {
    description?: string;
    deviceCount?: number;
    id?: number;
    manufacturer?: NestedManufacturer;
    name: string;
    /**
     * Additional arguments to pass when initiating the NAPALM driver (JSON format)
     */
    napalmArgs?: string;
    /**
     * The name of the NAPALM driver to use when interacting with devices
     */
    napalmDriver?: string;
    slug: string;
    virtualmachineCount?: number;
}
