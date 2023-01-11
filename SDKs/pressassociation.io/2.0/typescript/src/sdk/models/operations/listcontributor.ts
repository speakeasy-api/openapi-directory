import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListContributorQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=aliases" })
  aliases?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=updatedAfter" })
  updatedAfter?: string;
}


export class ListContributorSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  apikey: shared.SchemeApikey;
}


export class ListContributorRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListContributorQueryParams;

  @SpeakeasyMetadata()
  security: ListContributorSecurity;
}


export class ListContributorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listContributor200ApplicationJSONObject?: Record<string, any>;
}
