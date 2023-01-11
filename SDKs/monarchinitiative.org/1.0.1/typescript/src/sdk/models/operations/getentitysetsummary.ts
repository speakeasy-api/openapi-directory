import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetEntitySetSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=background" })
  background?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_category" })
  objectCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_slim" })
  objectSlim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject" })
  subject?: string[];
}


export class GetEntitySetSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEntitySetSummaryQueryParams;
}


export class GetEntitySetSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
