import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRelationUsagePivotResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence" })
  evidence?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject_taxon" })
  subjectTaxon?: string;
}


export class GetRelationUsagePivotResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRelationUsagePivotResourceQueryParams;
}


export class GetRelationUsagePivotResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssociationResults })
  associationResults?: shared.AssociationResults[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
