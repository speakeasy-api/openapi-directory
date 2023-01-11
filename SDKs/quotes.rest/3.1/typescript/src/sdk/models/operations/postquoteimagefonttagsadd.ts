import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostQuoteImageFontTagsAddQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags: string;
}


export class PostQuoteImageFontTagsAddSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PostQuoteImageFontTagsAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostQuoteImageFontTagsAddQueryParams;

  @SpeakeasyMetadata()
  security: PostQuoteImageFontTagsAddSecurity;
}


export class PostQuoteImageFontTagsAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
