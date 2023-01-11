import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeleteVariantSetItemPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteVariantSetItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVariantSetItemPathParams;
}


export class DeleteVariantSetItemResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
