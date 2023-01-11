import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetRelationUsageBetweenResourcePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=object_category" })
  objectCategory: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subject_category" })
  subjectCategory: string;
}


export class GetRelationUsageBetweenResourceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence" })
  evidence?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject_taxon" })
  subjectTaxon?: string;
}


export class GetRelationUsageBetweenResourceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetRelationUsageBetweenResourcePathParams;

  @SpeakeasyMetadata()
  queryParams: GetRelationUsageBetweenResourceQueryParams;
}


export class GetRelationUsageBetweenResourceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssociationResults })
  associationResults?: shared.AssociationResults[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
