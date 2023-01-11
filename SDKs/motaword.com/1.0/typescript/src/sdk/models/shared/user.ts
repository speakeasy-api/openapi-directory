import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguagePair } from "./languagepair";
import { BillingAddress } from "./billingaddress";
import { UserLinks } from "./userlinks";
import { Address } from "./address";
import { SocialMedia } from "./socialmedia";
import { UserGroup } from "./usergroup";



export class UserClientCorporate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=logo" })
  logo?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class UserClient extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=corporate" })
  corporate?: UserClientCorporate;

  @SpeakeasyMetadata({ data: "json, name=nps" })
  nps?: number;

  @SpeakeasyMetadata({ data: "json, name=subjects" })
  subjects?: Record<string, number>;
}


export class UserVendor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=can_work_manual_files" })
  canWorkManualFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_frozen" })
  isFrozen?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_proofreader" })
  isProofreader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language_pairs", elemType: LanguagePair })
  languagePairs?: LanguagePair[];

  @SpeakeasyMetadata({ data: "json, name=native_language" })
  nativeLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=paypal_email" })
  paypalEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=require_1099" })
  require1099?: boolean;

  @SpeakeasyMetadata({ data: "json, name=tags" })
  tags?: string[];

  @SpeakeasyMetadata({ data: "json, name=tms_user_name" })
  tmsUserName?: string;
}


export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing" })
  billing?: BillingAddress;

  @SpeakeasyMetadata({ data: "json, name=birthday" })
  birthday?: Date;

  @SpeakeasyMetadata({ data: "json, name=can_work_manual_files" })
  canWorkManualFiles?: boolean;

  @SpeakeasyMetadata({ data: "json, name=city" })
  city?: string;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: UserClient;

  @SpeakeasyMetadata({ data: "json, name=corporate_id" })
  corporateId?: number;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country?: string;

  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: number;

  @SpeakeasyMetadata({ data: "json, name=do_not_contact" })
  doNotContact?: boolean;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=has_pwd" })
  hasPwd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=is_client" })
  isClient?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_developer" })
  isDeveloper?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_proofreader" })
  isProofreader?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_prospect" })
  isProspect?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_sales_person" })
  isSalesPerson?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_vendor" })
  isVendor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language_pairs", elemType: LanguagePair })
  languagePairs?: LanguagePair[];

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=last_seen_online_at" })
  lastSeenOnlineAt?: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: UserLinks;

  @SpeakeasyMetadata({ data: "json, name=locale" })
  locale?: string;

  @SpeakeasyMetadata({ data: "json, name=mailing" })
  mailing?: Address;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=native_language" })
  nativeLanguage?: string;

  @SpeakeasyMetadata({ data: "json, name=nps" })
  nps?: number;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=profile_picture_path" })
  profilePicturePath?: string;

  @SpeakeasyMetadata({ data: "json, name=social_media" })
  socialMedia?: SocialMedia;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=street" })
  street?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=tms_user_name" })
  tmsUserName?: string;

  @SpeakeasyMetadata({ data: "json, name=user_groups", elemType: UserGroup })
  userGroups?: UserGroup[];

  @SpeakeasyMetadata({ data: "json, name=vendor" })
  vendor?: UserVendor;

  @SpeakeasyMetadata({ data: "json, name=zip_code" })
  zipCode?: string;
}
