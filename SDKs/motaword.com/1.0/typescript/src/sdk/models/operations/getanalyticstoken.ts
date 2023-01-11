import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnalyticsTokenPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetAnalyticsTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAnalyticsTokenPathParams;
}


export class GetAnalyticsTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  analyticsToken?: shared.AnalyticsToken;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
