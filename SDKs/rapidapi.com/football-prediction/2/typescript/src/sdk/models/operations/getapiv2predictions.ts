import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiV2PredictionsHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-RapidApi-Key" })
  xRapidApiKey?: string;
}


export class GetApiV2Predictions404ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors" })
  errors?: Record<string, any>;
}


export class GetApiV2PredictionsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApiV2PredictionsHeaders;
}


export class GetApiV2PredictionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getApiV2Predictions404ApplicationJSONObject?: GetApiV2Predictions404ApplicationJson;
}
