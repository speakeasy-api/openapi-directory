/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";

export class GetRelationUsagePivotLabelResourceRequest extends SpeakeasyBase {
  /**
   * Object id, e.g. ECO:0000501 (for IEA; Includes inferred by default)
   *
   * @remarks
   *                     or a specific publication or other supporting ibject, e.g. ZFIN:ZDB-PUB-060503-2.
   *
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=evidence",
  })
  evidence?: string;

  /**
   * SUBJECT TAXON id, e.g. NCBITaxon:9606. Includes inferred by default
   */
  @SpeakeasyMetadata({
    data: "queryParam, style=form;explode=true;name=subject_taxon",
  })
  subjectTaxon?: string;
}

export class GetRelationUsagePivotLabelResourceResponse extends SpeakeasyBase {
  /**
   * Success
   */
  @SpeakeasyMetadata({ elemType: shared.AssociationResults })
  associationResults?: shared.AssociationResults[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  rawResponse?: AxiosResponse;
}
