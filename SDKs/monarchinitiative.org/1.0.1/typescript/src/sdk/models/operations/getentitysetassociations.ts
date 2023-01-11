import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEntitySetAssociationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=background" })
  background?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_category" })
  objectCategory?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_slim" })
  objectSlim?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject" })
  subject?: string[];
}


export class GetEntitySetAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEntitySetAssociationsQueryParams;
}


export class GetEntitySetAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssociationResults })
  associationResults?: shared.AssociationResults[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
