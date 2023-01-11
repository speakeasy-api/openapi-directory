import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetImageCollectionListEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}


export class GetImageCollectionListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetImageCollectionListEmbedEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetImageCollectionListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetImageCollectionListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetImageCollectionListQueryParams;

  @SpeakeasyMetadata()
  security: GetImageCollectionListSecurity;
}


export class GetImageCollectionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
