import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteRequisitionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteRequisitionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteRequisitionPathParams;
}


export class DeleteRequisitionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
