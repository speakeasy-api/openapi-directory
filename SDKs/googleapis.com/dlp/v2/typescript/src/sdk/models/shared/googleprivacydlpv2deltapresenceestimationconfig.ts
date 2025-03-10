/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GooglePrivacyDlpV2QuasiId } from "./googleprivacydlpv2quasiid";
import { GooglePrivacyDlpV2StatisticalTable } from "./googleprivacydlpv2statisticaltable";
import { Expose, Type } from "class-transformer";

/**
 * δ-presence metric, used to estimate how likely it is for an attacker to figure out that one given individual appears in a de-identified dataset. Similarly to the k-map metric, we cannot compute δ-presence exactly without knowing the attack dataset, so we use a statistical model instead.
 */
export class GooglePrivacyDlpV2DeltaPresenceEstimationConfig extends SpeakeasyBase {
  /**
   * Several auxiliary tables can be used in the analysis. Each custom_tag used to tag a quasi-identifiers field must appear in exactly one field of one auxiliary table.
   */
  @SpeakeasyMetadata({ elemType: GooglePrivacyDlpV2StatisticalTable })
  @Expose({ name: "auxiliaryTables" })
  @Type(() => GooglePrivacyDlpV2StatisticalTable)
  auxiliaryTables?: GooglePrivacyDlpV2StatisticalTable[];

  /**
   * Required. Fields considered to be quasi-identifiers. No two fields can have the same tag.
   */
  @SpeakeasyMetadata({ elemType: GooglePrivacyDlpV2QuasiId })
  @Expose({ name: "quasiIds" })
  @Type(() => GooglePrivacyDlpV2QuasiId)
  quasiIds?: GooglePrivacyDlpV2QuasiId[];

  /**
   * ISO 3166-1 alpha-2 region code to use in the statistical modeling. Set if no column is tagged with a region-specific InfoType (like US_ZIP_5) or a region code.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "regionCode" })
  regionCode?: string;
}
