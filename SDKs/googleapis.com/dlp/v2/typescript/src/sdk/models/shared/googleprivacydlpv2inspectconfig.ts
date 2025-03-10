/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import { GooglePrivacyDlpV2CustomInfoType } from "./googleprivacydlpv2custominfotype";
import { GooglePrivacyDlpV2FindingLimits } from "./googleprivacydlpv2findinglimits";
import { GooglePrivacyDlpV2InfoType } from "./googleprivacydlpv2infotype";
import { GooglePrivacyDlpV2InspectionRuleSet } from "./googleprivacydlpv2inspectionruleset";
import { Expose, Type } from "class-transformer";

export enum GooglePrivacyDlpV2InspectConfigContentOptionsEnum {
  ContentUnspecified = "CONTENT_UNSPECIFIED",
  ContentText = "CONTENT_TEXT",
  ContentImage = "CONTENT_IMAGE",
}

/**
 * Only returns findings equal or above this threshold. The default is POSSIBLE. See https://cloud.google.com/dlp/docs/likelihood to learn more.
 */
export enum GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum {
  LikelihoodUnspecified = "LIKELIHOOD_UNSPECIFIED",
  VeryUnlikely = "VERY_UNLIKELY",
  Unlikely = "UNLIKELY",
  Possible = "POSSIBLE",
  Likely = "LIKELY",
  VeryLikely = "VERY_LIKELY",
}

/**
 * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
 */
export class GooglePrivacyDlpV2InspectConfig extends SpeakeasyBase {
  /**
   * Deprecated and unused.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "contentOptions" })
  contentOptions?: GooglePrivacyDlpV2InspectConfigContentOptionsEnum[];

  /**
   * CustomInfoTypes provided by the user. See https://cloud.google.com/dlp/docs/creating-custom-infotypes to learn more.
   */
  @SpeakeasyMetadata({ elemType: GooglePrivacyDlpV2CustomInfoType })
  @Expose({ name: "customInfoTypes" })
  @Type(() => GooglePrivacyDlpV2CustomInfoType)
  customInfoTypes?: GooglePrivacyDlpV2CustomInfoType[];

  /**
   * When true, excludes type information of the findings. This is not used for data profiling.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "excludeInfoTypes" })
  excludeInfoTypes?: boolean;

  /**
   * When true, a contextual quote from the data that triggered a finding is included in the response; see Finding.quote. This is not used for data profiling.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "includeQuote" })
  includeQuote?: boolean;

  /**
   * Restricts what info_types to look for. The values must correspond to InfoType values returned by ListInfoTypes or listed at https://cloud.google.com/dlp/docs/infotypes-reference. When no InfoTypes or CustomInfoTypes are specified in a request, the system may automatically choose what detectors to run. By default this may be all types, but may change over time as detectors are updated. If you need precise control and predictability as to what detectors are run you should specify specific InfoTypes listed in the reference, otherwise a default list will be used, which may change over time.
   */
  @SpeakeasyMetadata({ elemType: GooglePrivacyDlpV2InfoType })
  @Expose({ name: "infoTypes" })
  @Type(() => GooglePrivacyDlpV2InfoType)
  infoTypes?: GooglePrivacyDlpV2InfoType[];

  /**
   * Configuration to control the number of findings returned for inspection. This is not used for de-identification or data profiling. When redacting sensitive data from images, finding limits don't apply. They can cause unexpected or inconsistent results, where only some data is redacted. Don't include finding limits in RedactImage requests. Otherwise, Cloud DLP returns an error.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "limits" })
  @Type(() => GooglePrivacyDlpV2FindingLimits)
  limits?: GooglePrivacyDlpV2FindingLimits;

  /**
   * Only returns findings equal or above this threshold. The default is POSSIBLE. See https://cloud.google.com/dlp/docs/likelihood to learn more.
   */
  @SpeakeasyMetadata()
  @Expose({ name: "minLikelihood" })
  minLikelihood?: GooglePrivacyDlpV2InspectConfigMinLikelihoodEnum;

  /**
   * Set of rules to apply to the findings for this InspectConfig. Exclusion rules, contained in the set are executed in the end, other rules are executed in the order they are specified for each info type.
   */
  @SpeakeasyMetadata({ elemType: GooglePrivacyDlpV2InspectionRuleSet })
  @Expose({ name: "ruleSet" })
  @Type(() => GooglePrivacyDlpV2InspectionRuleSet)
  ruleSet?: GooglePrivacyDlpV2InspectionRuleSet[];
}
