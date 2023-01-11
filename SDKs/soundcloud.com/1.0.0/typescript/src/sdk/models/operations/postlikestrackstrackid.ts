import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostLikesTracksTrackIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track_id" })
  trackId: number;
}


export class PostLikesTracksTrackIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class PostLikesTracksTrackIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostLikesTracksTrackIdPathParams;

  @SpeakeasyMetadata()
  security: PostLikesTracksTrackIdSecurity;
}


export class PostLikesTracksTrackIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequests?: shared.TooManyRequests;
}
