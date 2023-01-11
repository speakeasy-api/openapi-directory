import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserResponsivityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: number;
}

export enum GetUserResponsivityPeriodEnum {
    Monthly = "monthly",
    Weekly = "weekly"
}


export class GetUserResponsivityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
  period?: GetUserResponsivityPeriodEnum;
}


export class GetUserResponsivitySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  mwoAuth: shared.SchemeMwoAuth;
}


export class GetUserResponsivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserResponsivityPathParams;

  @SpeakeasyMetadata()
  queryParams: GetUserResponsivityQueryParams;

  @SpeakeasyMetadata()
  security: GetUserResponsivitySecurity;
}


export class GetUserResponsivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  responsivityList?: shared.ResponsivityList;

  @SpeakeasyMetadata()
  statusCode: number;
}
