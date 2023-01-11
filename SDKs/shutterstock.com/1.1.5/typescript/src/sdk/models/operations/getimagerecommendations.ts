import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImageRecommendationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=max_items" })
  maxItems?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe" })
  safe?: boolean;
}


export class GetImageRecommendationsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetImageRecommendationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetImageRecommendationsQueryParams;

  @SpeakeasyMetadata()
  security: GetImageRecommendationsSecurity;
}


export class GetImageRecommendationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  recommendationDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
