import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutTracksTrackIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track_id" })
  trackId: number;
}


export class PutTracksTrackIdRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  trackDataRequest?: shared.TrackDataRequest;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/x-www-form-urlencoded" })
  trackDataRequest1?: shared.TrackDataRequest;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  trackMetadataRequest?: shared.TrackMetadataRequest;
}


export class PutTracksTrackIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class PutTracksTrackIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutTracksTrackIdPathParams;

  @SpeakeasyMetadata()
  request?: PutTracksTrackIdRequests;

  @SpeakeasyMetadata()
  security: PutTracksTrackIdSecurity;
}


export class PutTracksTrackIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  track?: shared.Track;
}
