import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PagingMeta } from "./pagingmeta";
import { UserGroup } from "./usergroup";



export class UserGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: PagingMeta;

  @SpeakeasyMetadata({ data: "json, name=user_groups", elemType: UserGroup })
  userGroups?: UserGroup[];
}
