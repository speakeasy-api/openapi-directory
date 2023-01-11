import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetImageCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetImageCollectionEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}


export class GetImageCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetImageCollectionEmbedEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=share_code" })
  shareCode?: string;
}


export class GetImageCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetImageCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetImageCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetImageCollectionQueryParams;

  @SpeakeasyMetadata()
  security: GetImageCollectionSecurity;
}


export class GetImageCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collection?: shared.Collection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
