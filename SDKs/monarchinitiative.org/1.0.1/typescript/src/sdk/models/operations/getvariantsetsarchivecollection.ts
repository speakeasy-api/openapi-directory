import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetVariantSetsArchiveCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=day" })
  day: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=month" })
  month: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: number;
}


export class GetVariantSetsArchiveCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetVariantSetsArchiveCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetVariantSetsArchiveCollectionPathParams;

  @SpeakeasyMetadata()
  queryParams: GetVariantSetsArchiveCollectionQueryParams;
}


export class GetVariantSetsArchiveCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  pageOfVariantSets?: shared.PageOfVariantSets;

  @SpeakeasyMetadata()
  statusCode: number;
}
