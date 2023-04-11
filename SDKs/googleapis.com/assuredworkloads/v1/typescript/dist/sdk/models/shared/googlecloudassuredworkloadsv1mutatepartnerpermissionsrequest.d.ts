import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions } from "./googlecloudassuredworkloadsv1workloadpartnerpermissions";
/**
 * Request of updating permission settings for a partner workload.
 */
export declare class GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest extends SpeakeasyBase {
    /**
     * Optional. The etag of the workload. If this is provided, it must match the server's etag.
     */
    etag?: string;
    /**
     * Permissions granted to the AW Partner SA account for the customer workload
     */
    partnerPermissions?: GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;
    /**
     * Required. The list of fields to be updated. E.g. update_mask { paths: "partner_permissions.data_logs_viewer"}
     */
    updateMask?: string;
}
