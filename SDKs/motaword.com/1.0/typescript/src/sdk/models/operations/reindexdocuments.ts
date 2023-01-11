import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReindexDocumentsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  asyncOperationStatus?: shared.AsyncOperationStatus;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
