import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetEvidenceGraphTablePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetEvidenceGraphTableQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_publication" })
  isPublication?: boolean;
}


export class GetEvidenceGraphTableRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetEvidenceGraphTablePathParams;

  @SpeakeasyMetadata()
  queryParams: GetEvidenceGraphTableQueryParams;
}


export class GetEvidenceGraphTableResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssociationResults })
  associationResults?: shared.AssociationResults[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
