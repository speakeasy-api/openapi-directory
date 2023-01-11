import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTrackCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class CreateTrackCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CollectionCreateRequest;

  @SpeakeasyMetadata()
  security: CreateTrackCollectionSecurity;
}


export class CreateTrackCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  collectionCreateResponse?: shared.CollectionCreateResponse;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
