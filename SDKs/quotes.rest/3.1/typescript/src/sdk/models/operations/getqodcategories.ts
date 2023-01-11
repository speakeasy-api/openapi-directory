import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetQodCategoriesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=detailed" })
  detailed?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: string;
}


export class GetQodCategoriesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class GetQodCategoriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetQodCategoriesQueryParams;

  @SpeakeasyMetadata()
  security: GetQodCategoriesSecurity;
}


export class GetQodCategoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
