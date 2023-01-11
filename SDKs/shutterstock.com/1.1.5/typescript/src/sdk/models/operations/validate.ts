import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ValidateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tag" })
  tag?: string[];
}


export class ValidateHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=user-agent" })
  userAgent?: string;
}


export class ValidateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ValidateQueryParams;

  @SpeakeasyMetadata()
  headers: ValidateHeaders;
}


export class ValidateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  testValidate?: shared.TestValidate;
}
