import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPairSimJaccardResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id1" })
  id1: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id2" })
  id2: string;
}


export class GetPairSimJaccardResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_category" })
  objectCategory?: string;
}


export class GetPairSimJaccardResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPairSimJaccardResourcePathParams;

  @SpeakeasyMetadata()
  queryParams: GetPairSimJaccardResourceQueryParams;
}


export class GetPairSimJaccardResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
