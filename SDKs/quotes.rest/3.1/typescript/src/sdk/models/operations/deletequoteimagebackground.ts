import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteQuoteImageBackgroundQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id: string;
}


export class DeleteQuoteImageBackgroundSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  xTheySaidSoApiSecret: shared.SchemeXTheySaidSoApiSecret;
}


export class DeleteQuoteImageBackgroundRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DeleteQuoteImageBackgroundQueryParams;

  @SpeakeasyMetadata()
  security: DeleteQuoteImageBackgroundSecurity;
}


export class DeleteQuoteImageBackgroundResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
