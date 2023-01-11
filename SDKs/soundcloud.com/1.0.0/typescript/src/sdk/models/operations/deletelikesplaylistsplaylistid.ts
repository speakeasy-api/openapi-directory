import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLikesPlaylistsPlaylistIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playlist_id" })
  playlistId: number;
}


export class DeleteLikesPlaylistsPlaylistIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class DeleteLikesPlaylistsPlaylistIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLikesPlaylistsPlaylistIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteLikesPlaylistsPlaylistIdSecurity;
}


export class DeleteLikesPlaylistsPlaylistIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
