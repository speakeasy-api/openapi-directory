import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMePlaylistsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetMePlaylistsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class GetMePlaylistsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMePlaylistsQueryParams;

  @SpeakeasyMetadata()
  security: GetMePlaylistsSecurity;
}


export class GetMePlaylistsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata({ elemType: shared.Playlist })
  playlistsArray?: shared.Playlist[];

  @SpeakeasyMetadata()
  statusCode: number;
}
