import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSimSearchMetricEnum {
    Phenodigm = "phenodigm",
    Jaccard = "jaccard",
    SimGic = "simGIC",
    Resnik = "resnik",
    SymmetricResnik = "symmetric_resnik"
}


export class GetSimSearchQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=id" })
  id?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_feature_set" })
  isFeatureSet?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metric" })
  metric?: GetSimSearchMetricEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=taxon" })
  taxon?: string;
}


export class GetSimSearchRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSimSearchQueryParams;
}


export class GetSimSearchResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  simResult?: shared.SimResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
