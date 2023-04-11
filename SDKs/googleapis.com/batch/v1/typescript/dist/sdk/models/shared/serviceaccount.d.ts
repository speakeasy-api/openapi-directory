import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Carries information about a Google Cloud service account.
 */
export declare class ServiceAccount extends SpeakeasyBase {
    /**
     * Email address of the service account. If not specified, the default Compute Engine service account for the project will be used. If instance template is being used, the service account has to be specified in the instance template and it has to match the email field here.
     */
    email?: string;
    /**
     * List of scopes to be enabled for this service account on the VM, in addition to the cloud-platform API scope that will be added by default.
     */
    scopes?: string[];
}
