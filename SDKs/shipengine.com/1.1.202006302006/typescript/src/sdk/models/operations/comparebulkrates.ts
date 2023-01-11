import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CompareBulkRatesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CompareBulkRatesRequestBody;
}


export class CompareBulkRatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.BulkRate })
  compareBulkRatesResponseBody?: shared.BulkRate[];

  @SpeakeasyMetadata()
  errorResponseBody?: shared.ErrorResponseBody;
}
