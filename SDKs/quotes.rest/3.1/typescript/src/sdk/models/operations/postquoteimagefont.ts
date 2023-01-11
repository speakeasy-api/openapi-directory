import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostQuoteImageFontRequestBodyFont extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=font" })
  font: string;
}


export class PostQuoteImageFontRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  font: PostQuoteImageFontRequestBodyFont;

  @SpeakeasyMetadata({ data: "multipart_form, name=tags" })
  tags?: string;
}


export class PostQuoteImageFontSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PostQuoteImageFontRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostQuoteImageFontRequestBody;

  @SpeakeasyMetadata()
  security: PostQuoteImageFontSecurity;
}


export class PostQuoteImageFontResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
