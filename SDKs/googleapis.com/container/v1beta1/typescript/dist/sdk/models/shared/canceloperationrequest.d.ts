import { SpeakeasyBase } from "../../../internal/utils";
/**
 * CancelOperationRequest cancels a single operation.
 */
export declare class CancelOperationRequest extends SpeakeasyBase {
    /**
     * The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/* /locations/* /operations/*`.
     */
    name?: string;
    /**
     * Required. Deprecated. The server-assigned `name` of the operation. This field has been deprecated and replaced by the name field.
     */
    operationId?: string;
    /**
     * Required. Deprecated. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects). This field has been deprecated and replaced by the name field.
     */
    projectId?: string;
    /**
     * Required. Deprecated. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the operation resides. This field has been deprecated and replaced by the name field.
     */
    zone?: string;
}
