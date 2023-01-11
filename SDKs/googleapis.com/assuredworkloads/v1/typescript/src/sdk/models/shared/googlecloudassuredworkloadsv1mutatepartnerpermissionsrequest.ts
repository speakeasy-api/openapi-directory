import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions } from "./googlecloudassuredworkloadsv1workloadpartnerpermissions";



// GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest
/** 
 * Request of updating permission settings for a partner workload.
**/
export class GoogleCloudAssuredworkloadsV1MutatePartnerPermissionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=partnerPermissions" })
  partnerPermissions?: GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions;

  @SpeakeasyMetadata({ data: "json, name=updateMask" })
  updateMask?: string;
}
