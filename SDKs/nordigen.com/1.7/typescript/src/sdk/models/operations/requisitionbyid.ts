import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RequisitionByIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RequisitionByIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RequisitionByIdPathParams;
}


export class RequisitionByIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  requisition?: shared.Requisition;

  @SpeakeasyMetadata()
  statusCode: number;
}
