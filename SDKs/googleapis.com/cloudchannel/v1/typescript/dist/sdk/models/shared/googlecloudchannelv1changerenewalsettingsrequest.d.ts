import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RenewalSettingsInput } from "./googlecloudchannelv1renewalsettings";
/**
 * Request message for CloudChannelService.ChangeRenewalSettings.
**/
export declare class GoogleCloudChannelV1ChangeRenewalSettingsRequestInput extends SpeakeasyBase {
    renewalSettings?: GoogleCloudChannelV1RenewalSettingsInput;
    requestId?: string;
}
