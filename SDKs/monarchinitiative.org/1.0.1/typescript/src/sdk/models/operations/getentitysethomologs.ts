import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEntitySetHomologsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject" })
  subject?: string[];
}


export class GetEntitySetHomologsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetEntitySetHomologsQueryParams;
}


export class GetEntitySetHomologsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssociationResults })
  associationResults?: shared.AssociationResults[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
