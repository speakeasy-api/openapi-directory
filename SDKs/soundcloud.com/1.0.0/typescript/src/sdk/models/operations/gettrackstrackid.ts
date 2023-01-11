import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTracksTrackIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track_id" })
  trackId: number;
}


export class GetTracksTrackIdQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secret_token" })
  secretToken?: string;
}


export class GetTracksTrackIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class GetTracksTrackIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTracksTrackIdPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTracksTrackIdQueryParams;

  @SpeakeasyMetadata()
  security: GetTracksTrackIdSecurity;
}


export class GetTracksTrackIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  track?: shared.Track;
}
