import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAssociationBySubjectCategorySearchPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subject_category" })
  subjectCategory: string;
}


export class GetAssociationBySubjectCategorySearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence" })
  evidence?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" })
  excludeAutomaticAssertions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=object_taxon" })
  objectTaxon?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relation" })
  relation?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=subject_taxon" })
  subjectTaxon?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unselect_evidence" })
  unselectEvidence?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_compact_associations" })
  useCompactAssociations?: boolean;
}


export class GetAssociationBySubjectCategorySearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAssociationBySubjectCategorySearchPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAssociationBySubjectCategorySearchQueryParams;
}


export class GetAssociationBySubjectCategorySearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ elemType: shared.AssociationResults })
  associationResults?: shared.AssociationResults[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
