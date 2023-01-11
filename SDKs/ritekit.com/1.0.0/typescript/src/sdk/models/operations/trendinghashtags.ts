import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TrendingHashtagsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=green" })
  green?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=latin" })
  latin?: boolean;
}


export class TrendingHashtagsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: TrendingHashtagsQueryParams;
}


export class TrendingHashtagsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
