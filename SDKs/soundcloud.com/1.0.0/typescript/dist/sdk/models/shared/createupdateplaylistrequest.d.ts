import { SpeakeasyBase } from "../../../internal/utils";
export declare enum CreateUpdatePlaylistRequestPlaylistSharingEnum {
    Public = "public",
    Private = "private"
}
export declare class CreateUpdatePlaylistRequestPlaylistTracks extends SpeakeasyBase {
    id: string;
}
export declare class CreateUpdatePlaylistRequestPlaylist extends SpeakeasyBase {
    description?: string;
    sharing?: CreateUpdatePlaylistRequestPlaylistSharingEnum;
    title?: string;
    tracks?: CreateUpdatePlaylistRequestPlaylistTracks[];
}
export declare class CreateUpdatePlaylistRequest extends SpeakeasyBase {
    playlist?: CreateUpdatePlaylistRequestPlaylist;
}
