import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostRepostsTracksTrackIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track_id" })
  trackId: number;
}


export class PostRepostsTracksTrackIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class PostRepostsTracksTrackIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostRepostsTracksTrackIdPathParams;

  @SpeakeasyMetadata()
  security: PostRepostsTracksTrackIdSecurity;
}


export class PostRepostsTracksTrackIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
