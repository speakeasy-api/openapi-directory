import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum GetTrackViewEnum {
    Minimal = "minimal",
    Full = "full"
}


export class GetTrackQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=view" })
  view?: GetTrackViewEnum;
}


export class GetTrackSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  basic?: shared.SchemeBasic;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode?: shared.SchemeCustomerAccessCode;
}


export class GetTrackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrackPathParams;

  @SpeakeasyMetadata()
  queryParams: GetTrackQueryParams;

  @SpeakeasyMetadata()
  security: GetTrackSecurity;
}


export class GetTrackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  audio?: shared.Audio;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
