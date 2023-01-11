import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CommentLinks } from "./commentlinks";



export class Comment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: string;

  @SpeakeasyMetadata({ data: "json, name=commented_at" })
  commentedAt?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: CommentLinks;
}
