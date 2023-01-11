import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVariantSetItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetVariantSetItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVariantSetItemPathParams;
}


export class GetVariantSetItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  variantSet?: shared.VariantSet;
}
