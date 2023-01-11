import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserPopularPairsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}


export class GetUserPopularPairsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  mwoAuth: shared.SchemeMwoAuth;
}


export class GetUserPopularPairsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserPopularPairsPathParams;

  @SpeakeasyMetadata()
  security: GetUserPopularPairsSecurity;
}


export class GetUserPopularPairsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  popularLanguagePairs?: shared.PopularLanguagePairs;

  @SpeakeasyMetadata()
  statusCode: number;
}
