import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTracksTrackIdStreamsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track_id" })
  trackId: number;
}


export class GetTracksTrackIdStreamsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=secret_token" })
  secretToken?: string;
}


export class GetTracksTrackIdStreamsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class GetTracksTrackIdStreamsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTracksTrackIdStreamsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTracksTrackIdStreamsQueryParams;

  @SpeakeasyMetadata()
  security: GetTracksTrackIdStreamsSecurity;
}


export class GetTracksTrackIdStreamsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  streams?: shared.Streams;
}
