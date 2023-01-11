import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrackCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}

export enum GetTrackCollectionEmbedEnum {
    ShareCode = "share_code",
    ShareUrl = "share_url"
}


export class GetTrackCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=embed" })
  embed?: GetTrackCollectionEmbedEnum[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=share_code" })
  shareCode?: string;
}


export class GetTrackCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class GetTrackCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrackCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTrackCollectionQueryParams;

  @SpeakeasyMetadata()
  security: GetTrackCollectionSecurity;
}


export class GetTrackCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collection?: shared.Collection;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
