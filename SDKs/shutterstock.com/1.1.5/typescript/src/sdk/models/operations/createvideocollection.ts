import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateVideoCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class CreateVideoCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CollectionCreateRequest;

  @SpeakeasyMetadata()
  security: CreateVideoCollectionSecurity;
}


export class CreateVideoCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionCreateResponse?: shared.CollectionCreateResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
