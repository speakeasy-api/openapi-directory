import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCaseDiseaseAssociationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCaseDiseaseAssociationsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direct" })
  direct?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=evidence" })
  evidence?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_automatic_assertions" })
  excludeAutomaticAssertions?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet" })
  facet?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=facet_fields" })
  facetFields?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fetch_objects" })
  fetchObjects?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=slim" })
  slim?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=unselect_evidence" })
  unselectEvidence?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=use_compact_associations" })
  useCompactAssociations?: boolean;
}


export class GetCaseDiseaseAssociationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCaseDiseaseAssociationsPathParams;

  @SpeakeasyMetadata()
  queryParams: GetCaseDiseaseAssociationsQueryParams;
}


export class GetCaseDiseaseAssociationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  associationResults?: shared.AssociationResults;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
