import { SpeakeasyBase } from "../../../internal/utils";
export declare class PolicyNetwork extends SpeakeasyBase {
    kind?: string;
    /**
     * The fully qualified URL of the VPC network to bind to. This should be formatted like https://www.googleapis.com/compute/v1/projects/{project}/global/networks/{network}
     */
    networkUrl?: string;
}
