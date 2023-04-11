import { SpeakeasyBase } from "../../../internal/utils";
import { BackendRule } from "./backendrule";
/**
 * `Backend` defines the backend configuration for a service.
 */
export declare class Backend extends SpeakeasyBase {
    /**
     * A list of API backend rules that apply to individual API methods. **NOTE:** All service configuration rules follow "last one wins" order.
     */
    rules?: BackendRule[];
}
