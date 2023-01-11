import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class InsertSalesActivityPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class InsertSalesActivityRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=timestamp" })
  timestamp?: number;

  @SpeakeasyMetadata({ data: "multipart_form, name=type" })
  type?: string;
}


export class InsertSalesActivityRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InsertSalesActivityPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: InsertSalesActivityRequestBody;
}


export class InsertSalesActivityResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: shared.ErrorT;

  @SpeakeasyMetadata()
  operationStatus?: shared.OperationStatus;

  @SpeakeasyMetadata()
  statusCode: number;
}
