import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMeTracksQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=linked_partitioning" })
  linkedPartitioning?: boolean;
}


export class GetMeTracksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  authHeader: shared.SchemeAuthHeader;
}


export class GetMeTracksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetMeTracksQueryParams;

  @SpeakeasyMetadata()
  security: GetMeTracksSecurity;
}


export class GetMeTracksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getMeTracks200ApplicationJSONOneOf?: any;
}
