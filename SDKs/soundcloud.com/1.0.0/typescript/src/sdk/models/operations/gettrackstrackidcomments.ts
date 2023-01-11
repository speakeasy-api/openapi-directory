import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTracksTrackIdCommentsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=track_id" })
  trackId: number;
}


export class GetTracksTrackIdCommentsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=linked_partitioning" })
  linkedPartitioning?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=offset" })
  offset?: number;
}


export class GetTracksTrackIdCommentsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  clientId: shared.SchemeClientId;
}


export class GetTracksTrackIdCommentsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTracksTrackIdCommentsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTracksTrackIdCommentsQueryParams;

  @SpeakeasyMetadata()
  security: GetTracksTrackIdCommentsSecurity;
}


export class GetTracksTrackIdCommentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getTracksTrackIdComments200ApplicationJSONOneOf?: any;
}
