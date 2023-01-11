import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Comment } from "./comment";



export class Comments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection", elemType: Comment })
  collection?: Comment[];

  @SpeakeasyMetadata({ data: "json, name=next_href" })
  nextHref?: string;
}
