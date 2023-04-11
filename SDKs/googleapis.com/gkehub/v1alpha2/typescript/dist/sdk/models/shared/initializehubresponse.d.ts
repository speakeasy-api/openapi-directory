import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Response message for the InitializeHub method.
 */
export declare class InitializeHubResponse extends SpeakeasyBase {
    /**
     * Name of the Hub default service identity, in the format: service-@gcp-sa-gkehub.iam.gserviceaccount.com The service account has `roles/gkehub.serviceAgent` in the Hub project.
     */
    serviceIdentity?: string;
    /**
     * The Workload Identity Pool used for Workload Identity-enabled clusters registered with this Hub. Format: `.hub.id.goog`
     */
    workloadIdentityPool?: string;
}
