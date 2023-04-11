import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1AdminUser } from "./googlecloudchannelv1adminuser";
import { GoogleCloudChannelV1CloudIdentityInfoInput } from "./googlecloudchannelv1cloudidentityinfo";
/**
 * Request message for CloudChannelService.ProvisionCloudIdentity
 */
export declare class GoogleCloudChannelV1ProvisionCloudIdentityRequestInput extends SpeakeasyBase {
    /**
     * Cloud Identity information for the Cloud Channel Customer.
     */
    cloudIdentityInfo?: GoogleCloudChannelV1CloudIdentityInfoInput;
    /**
     * Information needed to create an Admin User for Google Workspace.
     */
    user?: GoogleCloudChannelV1AdminUser;
    /**
     * Validate the request and preview the review, but do not post it.
     */
    validateOnly?: boolean;
}
