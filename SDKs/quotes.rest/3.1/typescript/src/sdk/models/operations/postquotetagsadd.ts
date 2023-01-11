import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostQuoteTagsAddQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=tags" })
  tags: string;
}


export class PostQuoteTagsAddSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class PostQuoteTagsAddRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: PostQuoteTagsAddQueryParams;

  @SpeakeasyMetadata()
  security: PostQuoteTagsAddSecurity;
}


export class PostQuoteTagsAddResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
