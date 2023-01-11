import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RenameVideoCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RenameVideoCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class RenameVideoCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RenameVideoCollectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CollectionUpdateRequest;

  @SpeakeasyMetadata()
  security: RenameVideoCollectionSecurity;
}


export class RenameVideoCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
