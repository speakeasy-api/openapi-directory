import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateImageCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class CreateImageCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CollectionCreateRequest;

  @SpeakeasyMetadata()
  security: CreateImageCollectionSecurity;
}


export class CreateImageCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionCreateResponse?: shared.CollectionCreateResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
