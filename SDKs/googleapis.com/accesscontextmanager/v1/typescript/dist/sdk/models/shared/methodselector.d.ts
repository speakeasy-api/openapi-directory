import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An allowed method or permission of a service specified in ApiOperation.
 */
export declare class MethodSelector extends SpeakeasyBase {
    /**
     * Value for `method` should be a valid method name for the corresponding `service_name` in ApiOperation. If `*` used as value for `method`, then ALL methods and permissions are allowed.
     */
    method?: string;
    /**
     * Value for `permission` should be a valid Cloud IAM permission for the corresponding `service_name` in ApiOperation.
     */
    permission?: string;
}
