import { SpeakeasyBase } from "../../../internal/utils";
export declare class ManagedZonePrivateVisibilityConfigNetwork extends SpeakeasyBase {
    kind?: string;
    /**
     * The fully qualified URL of the VPC network to bind to. Format this URL like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}
     */
    networkUrl?: string;
}
