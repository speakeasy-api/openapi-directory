import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserProjectStatsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetUserProjectStatsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  mwoAuth: shared.SchemeMwoAuth;
}


export class GetUserProjectStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserProjectStatsPathParams;

  @SpeakeasyMetadata()
  security: GetUserProjectStatsSecurity;
}


export class GetUserProjectStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  clientProjectStats?: shared.ClientProjectStats;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  statusCode: number;
}
