import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DowngradeUserProofreaderPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class DowngradeUserProofreaderSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  mwoAuth: shared.SchemeMwoAuth;
}


export class DowngradeUserProofreaderRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DowngradeUserProofreaderPathParams;

  @SpeakeasyMetadata()
  security: DowngradeUserProofreaderSecurity;
}


export class DowngradeUserProofreaderResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
