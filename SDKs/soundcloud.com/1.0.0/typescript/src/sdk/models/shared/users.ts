import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";



export class Users extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection", elemType: User })
  collection?: User[];

  @SpeakeasyMetadata({ data: "json, name=next_href" })
  nextHref?: string;
}
