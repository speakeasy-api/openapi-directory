import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShortenLinkQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=cta" })
  cta: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=url" })
  url: string;
}


export class ShortenLinkRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ShortenLinkQueryParams;
}


export class ShortenLinkResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
