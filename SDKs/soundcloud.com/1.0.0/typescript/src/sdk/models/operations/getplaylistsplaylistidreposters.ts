import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlaylistsPlaylistIdRepostersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: number;
}


export class GetPlaylistsPlaylistIdRepostersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetPlaylistsPlaylistIdRepostersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class GetPlaylistsPlaylistIdRepostersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlaylistsPlaylistIdRepostersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPlaylistsPlaylistIdRepostersQueryParams;

  @SpeakeasyMetadata()
  security: GetPlaylistsPlaylistIdRepostersSecurity;
}


export class GetPlaylistsPlaylistIdRepostersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  metaUsers?: shared.MetaUsers;

  @SpeakeasyMetadata()
  statusCode: number;
}
