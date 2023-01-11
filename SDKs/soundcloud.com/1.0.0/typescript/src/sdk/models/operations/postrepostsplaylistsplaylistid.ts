import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRepostsPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: number;
}


export class PostRepostsPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class PostRepostsPlaylistsPlaylistIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRepostsPlaylistsPlaylistIdPathParams;

  @SpeakeasyMetadata()
  security: PostRepostsPlaylistsPlaylistIdSecurity;
}


export class PostRepostsPlaylistsPlaylistIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
