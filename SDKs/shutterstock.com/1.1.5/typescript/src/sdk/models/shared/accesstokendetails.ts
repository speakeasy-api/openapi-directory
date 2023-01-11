import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AccessTokenDetailsRealmEnum {
    Customer = "customer",
    Contributor = "contributor"
}


// AccessTokenDetails
/** 
 * Access token details that are currently associated with this user
**/
export class AccessTokenDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=client_id" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "json, name=contributor_id" })
  contributorId?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_id" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=organization_id" })
  organizationId?: string;

  @SpeakeasyMetadata({ data: "json, name=realm" })
  realm?: AccessTokenDetailsRealmEnum;

  @SpeakeasyMetadata({ data: "json, name=scopes" })
  scopes?: string[];

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}
