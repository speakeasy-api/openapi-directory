import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostQuoteImageBackgroundRequestBodyImage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, content=true" })
  content: Uint8Array;

  @SpeakeasyMetadata({ data: "multipart_form, name=image" })
  image: string;
}


export class PostQuoteImageBackgroundRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, file=true" })
  image: PostQuoteImageBackgroundRequestBodyImage;

  @SpeakeasyMetadata({ data: "multipart_form, name=tags" })
  tags?: string;
}


export class PostQuoteImageBackgroundSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PostQuoteImageBackgroundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request?: PostQuoteImageBackgroundRequestBody;

  @SpeakeasyMetadata()
  security: PostQuoteImageBackgroundSecurity;
}


export class PostQuoteImageBackgroundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
