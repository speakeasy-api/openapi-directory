import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTracksTrackIdRepostersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track_id" })
  trackId: number;
}


export class GetTracksTrackIdRepostersQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class GetTracksTrackIdRepostersSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class GetTracksTrackIdRepostersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTracksTrackIdRepostersPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTracksTrackIdRepostersQueryParams;

  @SpeakeasyMetadata()
  security: GetTracksTrackIdRepostersSecurity;
}


export class GetTracksTrackIdRepostersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  metaUsers?: shared.MetaUsers;

  @SpeakeasyMetadata()
  statusCode: number;
}
