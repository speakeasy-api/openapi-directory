import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetV2CvSimilarVideosLicenseEnum {
    Commercial = "commercial",
    Editorial = "editorial"
}

export enum GetV2CvSimilarVideosViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class GetV2CvSimilarVideosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_id" })
  assetId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=language" })
  language?: shared.LanguageEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=license" })
  license?: GetV2CvSimilarVideosLicenseEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=safe" })
  safe?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetV2CvSimilarVideosViewEnum;
}


export class GetV2CvSimilarVideosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetV2CvSimilarVideosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetV2CvSimilarVideosQueryParams;

  @SpeakeasyMetadata()
  security: GetV2CvSimilarVideosSecurity;
}


export class GetV2CvSimilarVideosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  videoSearchResults?: shared.VideoSearchResults;
}
