import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostTracksRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  trackDataRequest?: shared.TrackDataRequest;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/x-www-form-urlencoded" })
  trackDataRequest1?: shared.TrackDataRequest;
}


export class PostTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class PostTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request?: PostTracksRequests;

  @SpeakeasyMetadata()
  security: PostTracksSecurity;
}


export class PostTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  track?: shared.Track;
}
