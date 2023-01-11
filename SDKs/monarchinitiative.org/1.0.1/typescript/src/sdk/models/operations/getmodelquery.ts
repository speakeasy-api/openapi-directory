import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetModelQueryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=contributor" })
  contributor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=title" })
  title?: string;
}


export class GetModelQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetModelQueryQueryParams;
}


export class GetModelQueryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
