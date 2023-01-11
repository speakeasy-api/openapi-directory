import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Track } from "./track";



export class Tracks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection", elemType: Track })
  collection?: Track[];

  @SpeakeasyMetadata({ data: "json, name=next_href" })
  nextHref?: string;
}
