import { SpeakeasyBase } from "../../../internal/utils";
export declare class VPCSettings extends SpeakeasyBase {
    /**
     * The resource name of the GCP Project to be used for VPC SC policy check. VPC security settings on this project will be honored for Cloud Search APIs after project_name has been updated through CustomerService. Format: projects/{project_id}
     */
    project?: string;
}
