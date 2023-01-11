import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// UserDetails
/** 
 * User details
**/
export class UserDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=contributor_id" })
  contributorId?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=first_name" })
  firstName?: string;

  @SpeakeasyMetadata({ data: "json, name=full_name" })
  fullName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_premier" })
  isPremier?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_premier_parent" })
  isPremierParent?: boolean;

  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=last_name" })
  lastName?: string;

  @SpeakeasyMetadata({ data: "json, name=only_enhanced_license" })
  onlyEnhancedLicense?: boolean;

  @SpeakeasyMetadata({ data: "json, name=only_sensitive_use" })
  onlySensitiveUse?: boolean;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=premier_permissions" })
  premierPermissions?: string[];

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
