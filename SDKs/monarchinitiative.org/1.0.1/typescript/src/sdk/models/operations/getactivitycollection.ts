import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetActivityCollectionQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor" })
  contributor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class GetActivityCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetActivityCollectionQueryParams;
}


export class GetActivityCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
