import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetUserStatsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  mwoAuth: shared.SchemeMwoAuth;
}


export class GetUserStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserStatsPathParams;

  @SpeakeasyMetadata()
  security: GetUserStatsSecurity;
}


export class GetUserStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  stats?: shared.Stats;

  @SpeakeasyMetadata()
  statusCode: number;
}
