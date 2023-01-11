import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetVideoCollectionListEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}


export class GetVideoCollectionListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetVideoCollectionListEmbedEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVideoCollectionListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetVideoCollectionListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVideoCollectionListQueryParams;

  @SpeakeasyMetadata()
  security: GetVideoCollectionListSecurity;
}


export class GetVideoCollectionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
