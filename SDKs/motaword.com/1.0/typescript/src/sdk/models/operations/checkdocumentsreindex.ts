import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CheckDocumentsReindexQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=async_request_key" })
  asyncRequestKey: string;
}


export class CheckDocumentsReindexRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: CheckDocumentsReindexQueryParams;
}


export class CheckDocumentsReindexResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asyncOperationStatus?: shared.AsyncOperationStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
