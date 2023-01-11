import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RenameImageCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RenameImageCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class RenameImageCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RenameImageCollectionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CollectionUpdateRequest;

  @SpeakeasyMetadata()
  security: RenameImageCollectionSecurity;
}


export class RenameImageCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
