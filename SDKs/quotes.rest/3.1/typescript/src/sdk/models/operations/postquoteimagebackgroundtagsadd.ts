import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostQuoteImageBackgroundTagsAddQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags: string;
}


export class PostQuoteImageBackgroundTagsAddSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PostQuoteImageBackgroundTagsAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostQuoteImageBackgroundTagsAddQueryParams;

  @SpeakeasyMetadata()
  security: PostQuoteImageBackgroundTagsAddSecurity;
}


export class PostQuoteImageBackgroundTagsAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
