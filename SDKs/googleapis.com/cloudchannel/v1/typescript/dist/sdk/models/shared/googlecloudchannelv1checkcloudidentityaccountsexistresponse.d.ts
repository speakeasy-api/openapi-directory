import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1CloudIdentityCustomerAccount } from "./googlecloudchannelv1cloudidentitycustomeraccount";
/**
 * Response message for CloudChannelService.CheckCloudIdentityAccountsExist.
 */
export declare class GoogleCloudChannelV1CheckCloudIdentityAccountsExistResponse extends SpeakeasyBase {
    /**
     * The Cloud Identity accounts associated with the domain.
     */
    cloudIdentityAccounts?: GoogleCloudChannelV1CloudIdentityCustomerAccount[];
}
