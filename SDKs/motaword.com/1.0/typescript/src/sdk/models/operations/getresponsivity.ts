import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetResponsivityPeriodEnum {
    Monthly = "monthly",
    Weekly = "weekly"
}


export class GetResponsivityQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=period" })
  period?: GetResponsivityPeriodEnum;
}


export class GetResponsivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetResponsivityQueryParams;
}


export class GetResponsivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  responsivityList?: shared.ResponsivityList;

  @SpeakeasyMetadata()
  statusCode: number;
}
