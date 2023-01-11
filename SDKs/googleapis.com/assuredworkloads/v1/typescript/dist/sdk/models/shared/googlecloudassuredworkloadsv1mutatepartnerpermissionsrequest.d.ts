import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions } from "./googlecloudassuredworkloadsv1workloadpartnerpermissions";
/**
 * Request of updating permission settings for a partner workload.
**/
export declare class GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest extends SpeakeasyBase {
    etag?: string;
    partnerPermissions?: GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;
    updateMask?: string;
}
