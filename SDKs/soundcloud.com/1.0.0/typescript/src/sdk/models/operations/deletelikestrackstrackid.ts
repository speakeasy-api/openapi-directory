import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteLikesTracksTrackIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track_id" })
  trackId: number;
}


export class DeleteLikesTracksTrackIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class DeleteLikesTracksTrackIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteLikesTracksTrackIdPathParams;

  @SpeakeasyMetadata()
  security: DeleteLikesTracksTrackIdSecurity;
}


export class DeleteLikesTracksTrackIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
