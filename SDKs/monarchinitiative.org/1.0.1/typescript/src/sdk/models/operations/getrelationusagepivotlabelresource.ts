import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRelationUsagePivotLabelResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence" })
  evidence?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject_taxon" })
  subjectTaxon?: string;
}


export class GetRelationUsagePivotLabelResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetRelationUsagePivotLabelResourceQueryParams;
}


export class GetRelationUsagePivotLabelResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssociationResults })
  associationResults?: shared.AssociationResults[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
