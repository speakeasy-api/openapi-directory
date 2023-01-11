import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSimilarImagesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetSimilarImagesViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class GetSimilarImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: shared.LanguageEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetSimilarImagesViewEnum;
}


export class GetSimilarImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetSimilarImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSimilarImagesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSimilarImagesQueryParams;

  @SpeakeasyMetadata()
  security: GetSimilarImagesSecurity;
}


export class GetSimilarImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageSearchResults?: shared.ImageSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
