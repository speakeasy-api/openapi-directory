import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateANewRequisitionRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  requisition?: shared.RequisitionInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  requisition1?: shared.RequisitionInput;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  requisition2?: shared.RequisitionInput;
}


export class CreateANewRequisitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: CreateANewRequisitionRequestsInput;
}


export class CreateANewRequisitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  requisition?: shared.Requisition;

  @SpeakeasyMetadata()
  statusCode: number;
}
