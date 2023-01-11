import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserUpdateContentNotifications
/** 
 * Notification settings
**/
export class UserUpdateContentNotifications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=sms_enabled" })
  smsEnabled?: boolean;
}


export class UserUpdateContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: Date;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=notifications" })
  notifications?: UserUpdateContentNotifications;

  @SpeakeasyMetadata({ data: "json, name=notify" })
  notify?: boolean;

  @SpeakeasyMetadata({ data: "json, name=paypal_email" })
  paypalEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=require_1099" })
  require1099?: boolean;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=street" })
  street?: string;

  @SpeakeasyMetadata({ data: "json, name=user_groups" })
  userGroups?: number[];

  @SpeakeasyMetadata({ data: "json, name=zip" })
  zip?: string;
}
