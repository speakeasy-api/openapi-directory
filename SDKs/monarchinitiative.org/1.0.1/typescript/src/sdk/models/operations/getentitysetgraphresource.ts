import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEntitySetGraphResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=background" })
  background?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_category" })
  objectCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_slim" })
  objectSlim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject" })
  subject?: string[];
}


export class GetEntitySetGraphResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEntitySetGraphResourceQueryParams;
}


export class GetEntitySetGraphResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
