import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQuoteCategoriesPopularQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;
}


export class GetQuoteCategoriesPopularSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class GetQuoteCategoriesPopularRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQuoteCategoriesPopularQueryParams;

  @SpeakeasyMetadata()
  security: GetQuoteCategoriesPopularSecurity;
}


export class GetQuoteCategoriesPopularResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
