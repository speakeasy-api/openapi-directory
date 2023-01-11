import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetV2CvSimilarImagesLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial"
}

export enum GetV2CvSimilarImagesViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class GetV2CvSimilarImagesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_id" })
  assetId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: shared.LanguageEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license?: GetV2CvSimilarImagesLicenseEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe" })
  safe?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetV2CvSimilarImagesViewEnum;
}


export class GetV2CvSimilarImagesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetV2CvSimilarImagesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV2CvSimilarImagesQueryParams;

  @SpeakeasyMetadata()
  security: GetV2CvSimilarImagesSecurity;
}


export class GetV2CvSimilarImagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  imageSearchResults?: shared.ImageSearchResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
