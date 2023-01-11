import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVariantSetsCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVariantSetsCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetVariantSetsCollectionQueryParams;
}


export class GetVariantSetsCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageOfVariantSets?: shared.PageOfVariantSets;

  @SpeakeasyMetadata()
  statusCode: number;
}
