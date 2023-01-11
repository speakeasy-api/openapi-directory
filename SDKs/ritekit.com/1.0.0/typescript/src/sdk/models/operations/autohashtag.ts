import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AutoHashtagQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=hashtagPosition" })
  hashtagPosition?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=maxHashtags" })
  maxHashtags?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=post" })
  post: string;
}


export class AutoHashtagRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AutoHashtagQueryParams;
}


export class AutoHashtagResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
