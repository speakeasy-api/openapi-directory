import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListApplicationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class ListApplicationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListApplicationQueryParams;
}


export class ListApplicationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  applicationResponseCollection?: any;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listApplication400ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  listApplication401ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  listApplication405ApplicationJSONAny?: any;

  @SpeakeasyMetadata()
  listApplication406ApplicationJSONAny?: any;
}
