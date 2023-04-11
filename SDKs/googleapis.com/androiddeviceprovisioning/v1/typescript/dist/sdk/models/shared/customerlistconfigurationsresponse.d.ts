import { SpeakeasyBase } from "../../../internal/utils";
import { Configuration } from "./configuration";
/**
 * Response message of customer's listing configuration.
 */
export declare class CustomerListConfigurationsResponse extends SpeakeasyBase {
    /**
     * The configurations.
     */
    configurations?: Configuration[];
}
