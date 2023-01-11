import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Playlist } from "./playlist";



export class Playlists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=collection", elemType: Playlist })
  collection?: Playlist[];

  @SpeakeasyMetadata({ data: "json, name=next_href" })
  nextHref?: string;
}
