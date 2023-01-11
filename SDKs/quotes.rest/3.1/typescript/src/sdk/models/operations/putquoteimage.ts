import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutQuoteImageQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bg_color" })
  bgColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=bgimage_id" })
  bgimageId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=branding" })
  branding?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=font_id" })
  fontId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=halign" })
  halign?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=height" })
  height?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_transparent_layer" })
  includeTransparentLayer?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=quote_id" })
  quoteId: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text_color" })
  textColor?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=text_size" })
  textSize?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=valign" })
  valign?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=width" })
  width?: number;
}


export class PutQuoteImageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PutQuoteImageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PutQuoteImageQueryParams;

  @SpeakeasyMetadata()
  security: PutQuoteImageSecurity;
}


export class PutQuoteImageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
