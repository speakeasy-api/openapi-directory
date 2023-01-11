import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MetaUser } from "./metauser";



export class MetaUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection", elemType: MetaUser })
  collection?: MetaUser[];

  @SpeakeasyMetadata({ data: "json, name=next_href" })
  nextHref?: string;
}
