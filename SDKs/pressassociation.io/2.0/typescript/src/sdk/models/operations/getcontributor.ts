import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetContributorPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=contributorId" })
  contributorId: string;
}


export class GetContributorQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliases" })
  aliases?: boolean;
}


export class GetContributorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class GetContributorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetContributorPathParams;

  @SpeakeasyMetadata()
  queryParams: GetContributorQueryParams;

  @SpeakeasyMetadata()
  security: GetContributorSecurity;
}


export class GetContributorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getContributor200ApplicationJSONObject?: Record<string, any>;
}
