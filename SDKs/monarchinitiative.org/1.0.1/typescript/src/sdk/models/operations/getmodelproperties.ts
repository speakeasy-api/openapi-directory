import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModelPropertiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor" })
  contributor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class GetModelPropertiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModelPropertiesQueryParams;
}


export class GetModelPropertiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
