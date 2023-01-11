import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum GetSimCompareMetricEnum {
    Phenodigm = "phenodigm",
    Jaccard = "jaccard",
    SimGic = "simGIC",
    Resnik = "resnik",
    SymmetricResnik = "symmetric_resnik"
}


export class GetSimCompareQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=is_feature_set" })
  isFeatureSet?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=metric" })
  metric?: GetSimCompareMetricEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query_id" })
  queryId?: string[];

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ref_id" })
  refId?: string[];
}


export class GetSimCompareRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetSimCompareQueryParams;
}


export class GetSimCompareResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  simResult?: shared.SimResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
