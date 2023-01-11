import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions
/** 
 * Permissions granted to the AW Partner SA account for the customer workload
**/
export class GoogleCloudAssuredworkloadsV1WorkloadPartnerPermissions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=dataLogsViewer" })
  dataLogsViewer?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remediateFolderViolations" })
  remediateFolderViolations?: boolean;

  @SpeakeasyMetadata({ data: "json, name=serviceAccessApprover" })
  serviceAccessApprover?: boolean;
}
