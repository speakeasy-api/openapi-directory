import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetKeywordsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=asset_id" })
  assetId: any;
}


export class GetKeywordsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetKeywordsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetKeywordsQueryParams;

  @SpeakeasyMetadata()
  security: GetKeywordsSecurity;
}


export class GetKeywordsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  keywordDataList?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
