import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTracksTrackIdCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track_id" })
  trackId: number;
}


export class PostTracksTrackIdCommentsRequestBodyComment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=body" })
  body: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp?: any;
}


export class PostTracksTrackIdCommentsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comment" })
  comment?: PostTracksTrackIdCommentsRequestBodyComment;
}


export class PostTracksTrackIdCommentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class PostTracksTrackIdCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostTracksTrackIdCommentsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: PostTracksTrackIdCommentsRequestBody;

  @SpeakeasyMetadata()
  security: PostTracksTrackIdCommentsSecurity;
}


export class PostTracksTrackIdCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  comment?: shared.Comment;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tooManyRequests?: shared.TooManyRequests;
}
