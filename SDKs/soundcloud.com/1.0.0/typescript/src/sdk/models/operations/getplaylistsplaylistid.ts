import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: number;
}


export class GetPlaylistsPlaylistIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=access" })
  access?: shared.AccessEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secret_token" })
  secretToken?: string;
}


export class GetPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class GetPlaylistsPlaylistIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlaylistsPlaylistIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPlaylistsPlaylistIdQueryParams;

  @SpeakeasyMetadata()
  security: GetPlaylistsPlaylistIdSecurity;
}


export class GetPlaylistsPlaylistIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  playlist?: shared.Playlist;

  @SpeakeasyMetadata()
  statusCode: number;
}
