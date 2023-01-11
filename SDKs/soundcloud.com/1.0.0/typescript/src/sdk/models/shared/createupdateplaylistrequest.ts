import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CreateUpdatePlaylistRequestPlaylistSharingEnum {
    Public = "public",
    Private = "private"
}


export class CreateUpdatePlaylistRequestPlaylistTracks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;
}


export class CreateUpdatePlaylistRequestPlaylist extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=sharing" })
  sharing?: CreateUpdatePlaylistRequestPlaylistSharingEnum;

  @SpeakeasyMetadata({ data: "json, name=title" })
  title?: string;

  @SpeakeasyMetadata({ data: "json, name=tracks", elemType: CreateUpdatePlaylistRequestPlaylistTracks })
  tracks?: CreateUpdatePlaylistRequestPlaylistTracks[];
}


export class CreateUpdatePlaylistRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=playlist" })
  playlist?: CreateUpdatePlaylistRequestPlaylist;
}
