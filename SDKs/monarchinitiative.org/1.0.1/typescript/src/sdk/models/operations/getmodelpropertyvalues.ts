import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModelPropertyValuesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor" })
  contributor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class GetModelPropertyValuesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModelPropertyValuesQueryParams;
}


export class GetModelPropertyValuesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
