import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPlaylistsPlaylistIdTracksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: number;
}


export class GetPlaylistsPlaylistIdTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=access" })
  access?: shared.AccessEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=linked_partitioning" })
  linkedPartitioning?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secret_token" })
  secretToken?: string;
}


export class GetPlaylistsPlaylistIdTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class GetPlaylistsPlaylistIdTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPlaylistsPlaylistIdTracksPathParams;

  @SpeakeasyMetadata()
  queryParams: GetPlaylistsPlaylistIdTracksQueryParams;

  @SpeakeasyMetadata()
  security: GetPlaylistsPlaylistIdTracksSecurity;
}


export class GetPlaylistsPlaylistIdTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPlaylistsPlaylistIdTracks200ApplicationJSONOneOf?: any;
}
