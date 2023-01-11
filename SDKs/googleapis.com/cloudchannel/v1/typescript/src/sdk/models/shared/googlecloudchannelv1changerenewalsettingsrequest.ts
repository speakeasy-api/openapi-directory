import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudChannelV1RenewalSettingsInput } from "./googlecloudchannelv1renewalsettings";



// GoogleCloudChannelV1ChangeRenewalSettingsRequestInput
/** 
 * Request message for CloudChannelService.ChangeRenewalSettings.
**/
export class GoogleCloudChannelV1ChangeRenewalSettingsRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=renewalSettings" })
  renewalSettings?: GoogleCloudChannelV1RenewalSettingsInput;

  @SpeakeasyMetadata({ data: "json, name=requestId" })
  requestId?: string;
}
