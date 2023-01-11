import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetTrackCollectionListEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}


export class GetTrackCollectionListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetTrackCollectionListEmbedEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetTrackCollectionListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetTrackCollectionListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetTrackCollectionListQueryParams;

  @SpeakeasyMetadata()
  security: GetTrackCollectionListSecurity;
}


export class GetTrackCollectionListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionDataList?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
