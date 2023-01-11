import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChangedBy } from "./changedby";
import { UserTitleEnum } from "./usertitleenum";



export class User extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changed" })
  changed?: Date;

  @SpeakeasyMetadata({ data: "json, name=changed_by" })
  changedBy?: ChangedBy;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=is_active" })
  isActive?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_admin" })
  isAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=is_billing_admin" })
  isBillingAdmin?: boolean;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: UserTitleEnum;
}
