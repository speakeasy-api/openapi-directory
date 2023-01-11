import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UserGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=corporate_id" })
  corporateId?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=permissions" })
  permissions?: string[];
}
