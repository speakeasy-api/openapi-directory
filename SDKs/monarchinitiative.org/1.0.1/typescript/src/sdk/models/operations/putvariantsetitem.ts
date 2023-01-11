import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutVariantSetItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PutVariantSetItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutVariantSetItemPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.VariantSet;
}


export class PutVariantSetItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
