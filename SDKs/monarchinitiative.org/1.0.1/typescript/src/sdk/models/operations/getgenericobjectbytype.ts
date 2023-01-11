import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GetGenericObjectByTypeTypeEnum {
    Gene = "gene",
    Variant = "variant",
    Genotype = "genotype",
    Phenotype = "phenotype",
    Disease = "disease",
    Goterm = "goterm",
    Pathway = "pathway",
    Anatomy = "anatomy",
    Substance = "substance",
    Individual = "individual",
    Publication = "publication",
    Model = "model",
    Case = "case"
}


export class GetGenericObjectByTypePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: GetGenericObjectByTypeTypeEnum;
}


export class GetGenericObjectByTypeQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=direct" })
  direct?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=distinct_counts" })
  distinctCounts?: boolean;

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

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=get_association_counts" })
  getAssociationCounts?: boolean;

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


export class GetGenericObjectByTypeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetGenericObjectByTypePathParams;

  @SpeakeasyMetadata()
  queryParams: GetGenericObjectByTypeQueryParams;
}


export class GetGenericObjectByTypeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
