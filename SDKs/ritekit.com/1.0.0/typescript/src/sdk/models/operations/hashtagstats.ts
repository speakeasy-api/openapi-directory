import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class HashtagStatsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=false;name=tags" })
  tags: any[];
}


export class HashtagStatsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: HashtagStatsQueryParams;
}


export class HashtagStatsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
