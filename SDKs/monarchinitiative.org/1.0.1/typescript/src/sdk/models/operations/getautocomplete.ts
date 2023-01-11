import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAutocompletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=term" })
  term: string;
}


export class GetAutocompleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=boost_fx" })
  boostFx?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=boost_q" })
  boostQ?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=category" })
  category?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=exclude_groups" })
  excludeGroups?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=fq" })
  fq?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=highlight_class" })
  highlightClass?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_eqs" })
  includeEqs?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=min_match" })
  minMatch?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=minimal_tokenizer" })
  minimalTokenizer?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=prefix" })
  prefix?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=rows" })
  rows?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=start" })
  start?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxon" })
  taxon?: string[];
}


export class GetAutocompleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAutocompletePathParams;

  @SpeakeasyMetadata()
  queryParams: GetAutocompleteQueryParams;
}


export class GetAutocompleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  autocompleteResults?: shared.AutocompleteResults;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
