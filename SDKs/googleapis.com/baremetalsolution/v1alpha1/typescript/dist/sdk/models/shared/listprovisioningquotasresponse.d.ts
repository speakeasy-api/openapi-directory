import { SpeakeasyBase } from "../../../internal/utils";
import { ProvisioningQuota } from "./provisioningquota";
/**
 * Response for ListProvisioningQuotas.
 */
export declare class ListProvisioningQuotasResponse extends SpeakeasyBase {
    /**
     * Token to retrieve the next page of results, or empty if there are no more results in the list.
     */
    nextPageToken?: string;
    /**
     * The provisioning quotas registered in this project.
     */
    provisioningQuotas?: ProvisioningQuota[];
}
