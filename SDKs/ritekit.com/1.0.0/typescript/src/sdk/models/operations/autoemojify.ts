import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutoEmojifyQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text" })
  text: string;
}


export class AutoEmojifyRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AutoEmojifyQueryParams;
}


export class AutoEmojifyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
