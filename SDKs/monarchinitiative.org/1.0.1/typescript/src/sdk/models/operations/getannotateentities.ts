import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAnnotateEntitiesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_category" })
  excludeCategory?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_abbreviation" })
  includeAbbreviation?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_acronym" })
  includeAcronym?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_category" })
  includeCategory?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_numbers" })
  includeNumbers?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=longest_only" })
  longestOnly?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_length" })
  minLength?: string;
}


export class GetAnnotateEntitiesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAnnotateEntitiesQueryParams;
}


export class GetAnnotateEntitiesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  entityAnnotationResult?: shared.EntityAnnotationResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
