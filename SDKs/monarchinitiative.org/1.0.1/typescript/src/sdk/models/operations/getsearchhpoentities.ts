import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetSearchHpoEntitiesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=term" })
  term: string;
}


export class GetSearchHpoEntitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=anatomical_system" })
  anatomicalSystem?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=anatomical_system_label" })
  anatomicalSystemLabel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highlight_class" })
  highlightClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phenotype_group" })
  phenotypeGroup?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phenotype_group_label" })
  phenotypeGroupLabel?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;
}


export class GetSearchHpoEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSearchHpoEntitiesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetSearchHpoEntitiesQueryParams;
}


export class GetSearchHpoEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  layResults?: shared.LayResults;

  @SpeakeasyMetadata()
  statusCode: number;
}
