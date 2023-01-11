import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteVideoCollectionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DeleteVideoCollectionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  customerAccessCode: shared.SchemeCustomerAccessCode;
}


export class DeleteVideoCollectionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteVideoCollectionPathParams;

  @SpeakeasyMetadata()
  security: DeleteVideoCollectionSecurity;
}


export class DeleteVideoCollectionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
